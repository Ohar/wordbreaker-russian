export default function ifInsidePrefix (pos, prefix) {
  return prefix && (pos + 1 < prefix.length);
}
