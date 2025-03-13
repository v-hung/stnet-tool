export function verticalToHorizontal(text: string) {
  const rows = text.trim().split('\n')

  const matrix = rows.map(row => row.split('\t'))

  const numRows = matrix.length
  const numCols = matrix[0].length

  const result = []
  for (let col = 0; col < numCols; col++) {
    const newRow = []
    for (let row = 0; row < numRows; row++) {
      newRow.push(matrix[row][col])
    }
    result.push(newRow)
  }

  return result.map(row => row.join('\t')).join('\n')
}
