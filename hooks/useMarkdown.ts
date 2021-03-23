import { createContext, createElement, useContext, useState } from 'react'

type MarkdownContextData = {
  markdown: string
  setMarkdown: React.Dispatch<
    React.SetStateAction<MarkdownContextData['markdown']>
  >
}

const MarkdownContext = createContext({} as MarkdownContextData)

export default function MarkdownProvider({ children }: any) {
  const [markdown, setMarkdown] = useState('')

  const value = {
    markdown,
    setMarkdown,
  }

  return createElement(MarkdownContext.Provider, { value }, children)
}

export function useMarkdown() {
  return useContext(MarkdownContext)
}
