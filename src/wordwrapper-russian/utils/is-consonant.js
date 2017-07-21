import CONSONANTS from './../consts/consonants'

export default function isConsonant (s) {
  return Boolean(s && CONSONANTS.includes(s.toLowerCase()));
}
