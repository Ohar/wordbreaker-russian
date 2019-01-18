// 124
// Нельзя оставлять в конце строки открывающую скобку и открывающие кавычки.

const openBraceOrQuotesList = ['(', '{', '«', '“']

export default function isOpenBraceOrQuotes (pos, word) {
    return openBraceOrQuotesList.includes(word[pos])
}
