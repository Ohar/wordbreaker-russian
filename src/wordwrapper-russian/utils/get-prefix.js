import ifStartWith from './../utils/if-start-with'
import PREFIXES    from './../consts/prefixes'

export default function getPrefix (word) {
  let prefix     = ''

let prefixTemp = ''

  PREFIXES.forEach(
      el => {
          if (
                 ifStartWith(word, el) &&
              prefixTemp.length < el.length
          ) {
              prefix = prefixTemp = el
          }
      }
  )

  return prefix
}
