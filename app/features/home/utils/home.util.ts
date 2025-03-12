export function csvToTsv(csv: string) {
  const lines = csv.trim().split('\n')
  const tsvLines = new Array(lines.length)

  for (let i = 0; i < lines.length; i++) {
    const regex = /(?:"([^"]*)")|([^,\n]+)/g
    const fields = []
    let match

    while ((match = regex.exec(lines[i])) !== null) {
      let field = match[1] !== undefined ? match[1] : match[2]
      fields.push(`"${field}"`)
    }

    tsvLines[i] = fields.join('\t')
  }

  return tsvLines.join('\n')
}

export function tsvToCsv(tsv: string) {
  const lines = tsv.trimEnd().split('\n')
  let endIndex = lines.length

  while (endIndex > 0 && lines[endIndex - 1].trim() === '') {
    endIndex--
  }

  let result = ''
  for (let i = 0; i < endIndex; i++) {
    const fields = lines[i].split('\t')
    for (let j = 0; j < fields.length; j++) {
      const field = `"${fields[j].replace(/"/g, '""')}"`
      result += (j ? ',' : '') + field
    }
    result += '\n'
  }

  return result
}
