import { App, Breadcrumb } from 'antd'
import type { Route } from './+types/Home'
import TextArea from 'antd/es/input/TextArea'
import { useCallback, useEffect, useState } from 'react'
import { verticalToHorizontal } from '~/features/transform/utils/transformText.util'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'STnet Tools - Transform text' },
    { name: 'author', content: 'viet.hung.2898@gmail.com' },
  ]
}

export default function Transform() {
  const { message } = App.useApp()

  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  useEffect(() => {
    if (input) {
      setOutput(verticalToHorizontal(input))
    } else {
      setOutput('')
    }
  }, [input])

  const copyText = useCallback(() => {
    if (output) {
      navigator.clipboard
        .writeText(output)
        .then(_ => message.success('Copied to clipboard!'))
        .catch(_ => message.error('Copied to clipboard failed!'))
    }
  }, [output])

  const pasteText = useCallback(async () => {
    try {
      const text = await navigator.clipboard.readText()
      setInput(text)
    } catch (err) {
      console.error('Paste failed!', err)
    }
  }, [])

  return (
    <>
      <Breadcrumb
        style={{ margin: '16px 0' }}
        items={[
          { key: '1', title: 'STnet tools' },
          { key: '2', title: 'Vertical to horizontal' },
        ]}
      />

      <div className="mt-12 flex items-center">
        <div className="group relative flex-1">
          <TextArea
            value={input}
            placeholder="Enter here"
            onChange={e => setInput(e.target.value)}
            autoSize={{ minRows: 20, maxRows: 30 }}
          />

          <div
            className="absolute bottom-0 hidden h-10 w-full cursor-pointer items-center justify-center bg-blue-400/10 group-hover:flex"
            onClick={pasteText}
          >
            <img src="./icons/paste.svg" alt="Paste" />
            <span className="font-semibold">&nbsp;Paste</span>
          </div>
        </div>

        <div className="flex-none">
          <div className="cursor-pointer rounded-full p-1 hover:bg-white/60">
            <img src="./icons/sync.svg" className="h-10 w-10" alt="Switch" />
          </div>
        </div>

        <div className="group relative flex-1">
          <TextArea
            autoSize={{ minRows: 20, maxRows: 30 }}
            value={output}
            readOnly
          />

          <div
            className="absolute bottom-0 hidden h-10 w-full cursor-pointer items-center justify-center bg-green-400/10 group-hover:flex"
            onClick={copyText}
          >
            <img src="./icons/copy.svg" alt="Copy" />
            <span className="font-semibold">&nbsp;Copy</span>
          </div>
        </div>
      </div>
    </>
  )
}
