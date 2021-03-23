import Head from 'next/head'
import Display from '../components/display'
import Editor from '../components/editor'
import MarkdownProvider from '../hooks/useMarkdown'

export default function Home() {
  return (
    <MarkdownProvider>
      <div className="flex flex-row items-center container mx-auto h-screen p-16">
        <Editor />
        <Display />
      </div>
    </MarkdownProvider>
  )
}
