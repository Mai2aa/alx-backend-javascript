export default function setFromArray(array) {
  if (!Array.isArray(array)) {
    return [];
  }
  const mySet = new Set(array);
  return mySet;
}
