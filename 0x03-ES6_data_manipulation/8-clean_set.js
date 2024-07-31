export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string') {
    throw new Error('Invalid arguments');
  }
  const cleanValues = [];
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      cleanValues.push(value.slice(startString.length));
    }
  }
  return cleanValues.join('-');
}
