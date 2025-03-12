import { App, Breadcrumb } from 'antd'
import type { Route } from './+types/Home'
import TextArea from 'antd/es/input/TextArea'
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
} from 'react'
import { csvToTsv, tsvToCsv } from '~/features/home/utils/home.util'

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'STnet Tools' },
    { name: 'author', content: 'viet.hung.2898@gmail.com' },
  ]
}

export default function Home() {
  const { message } = App.useApp()

  const [convertType, setConvertType] = useState<'csvToExcel' | 'excelToCsv'>(
    'csvToExcel',
  )
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  useEffect(() => {
    if (input) {
      setOutput(convertType == 'csvToExcel' ? csvToTsv(input) : tsvToCsv(input))
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
          { key: '2', title: 'Csv data to excel data' },
        ]}
      />

      <div className="mt-12 flex items-center">
        <div className="group relative flex-1">
          <p className="absolute -top-8 left-1 text-lg font-semibold">
            {convertType === 'csvToExcel' ? 'Csv data' : 'Excel data'}
          </p>
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
          <div
            className="cursor-pointer rounded-full p-1 hover:bg-white/60"
            onClick={() =>
              setConvertType(prev =>
                prev === 'excelToCsv' ? 'csvToExcel' : 'excelToCsv',
              )
            }
          >
            <img src="./icons/sync.svg" className="h-10 w-10" alt="Switch" />
          </div>
        </div>

        <div className="group relative flex-1">
          <p className="absolute -top-8 left-1 text-lg font-semibold">
            {convertType !== 'csvToExcel' ? 'Csv data' : 'Excel data'}
          </p>
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
