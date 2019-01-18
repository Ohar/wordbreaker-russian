import SIGN_LIST from './../consts/signList'
import inList from './../utils/in-list'

export default function isSign (s) {
  return inList(SIGN_LIST, s)
}
