export default function inList (list, el) {
  return Boolean(el && list.includes(el.toLowerCase()))
}
