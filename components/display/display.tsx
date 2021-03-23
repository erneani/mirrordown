import React, { useEffect } from 'react'
import { useMarkdown } from '../../hooks/useMarkdown'
import { useDisplay } from './useDisplay'

export default function Display() {
  const { markdown } = useMarkdown()
  const { parsedMarkdown } = useDisplay(markdown)

  return (
    <div className="w-1/2 h-full bg-white border-2 border-l-0 border-white rounded-r-xl p-5">
      <div
        className="overflow-y-auto"
        dangerouslySetInnerHTML={parsedMarkdown}
      ></div>
    </div>
  )
}
