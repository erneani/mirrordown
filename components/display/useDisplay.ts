import marked from 'marked'

type HTMLParsed = {
  __html: string
}

export function useDisplay(markdown: string) {
  const parsedMarkdown = parseMarkdown(markdown)

  return {
    parsedMarkdown,
  }
}

function parseMarkdown(markdown: string): HTMLParsed {
  const __html = marked(markdown)

  return { __html }
}
