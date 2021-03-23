import React, { useState } from 'react'
import { useMarkdown } from '../../hooks/useMarkdown'

export default function Editor() {
  const { setMarkdown } = useMarkdown()

  return (
    <div className="w-1/2 h-full bg-black border-2 border-r-0 border-white rounded-l-xl p-5">
      <textarea
        name="editor"
        id="editor"
        className="appearance-none bg-black text-white w-full h-full resize-none text-base md:text-lg xl:text-2xl outline-none"
        onChange={(event) => setMarkdown(event.currentTarget.value)}
      ></textarea>
    </div>
  )
}
