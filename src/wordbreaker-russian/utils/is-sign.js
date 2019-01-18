import SIGN_LIST from './../consts/signList'

export default function isSign (s) {
  return Boolean(s && SIGN_LIST.includes(s.toLowerCase()))
}
