export function verticalToHorizontal(text: string) {
  return text
    .trim()
    .split('\n') // Chia từng dòng
    .map(field => `"${field.replace(/"/g, '""')}"`) // Bọc trong `""`, escape dấu `"`
    .join('\t') // Ghép lại bằng dấu tab
}

export function horizontalToVertical(text: string) {
  return text
    .trim()
    .split('\t') // Chia theo dấu tab
    .map(field => `"${field.replace(/"/g, '""')}"`) // Bọc trong `""`, escape dấu `"`
    .join('\n') // Ghép lại thành từng dòng
}
