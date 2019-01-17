import VOWELS from './../consts/vowels'

export default function isVowel (s) {
  return Boolean(s && VOWELS.includes(s.toLowerCase()))
}
