import VOWELS from './../consts/vowels'
import inList from './../utils/in-list'

export default function isVowel (s) {
  return inList(VOWELS, s)
}
