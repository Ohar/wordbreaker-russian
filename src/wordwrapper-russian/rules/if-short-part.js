// 119.3
// Нельзя оставлять в конце строки или переносить на другую строку одну букву

export default function ifShortPart (pos, arr) {
  return (
       pos === 0
    || pos >= arr.length - 2
  )
}
