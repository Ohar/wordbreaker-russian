import CONSONANTS from './../consts/consonants'
import inList from './../utils/in-list'

export default function isConsonant (s) {
  return inList(CONSONANTS, s)
}
