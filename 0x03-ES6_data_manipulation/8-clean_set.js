export default function cleanSet(set, startString) {
  const cleanValues = [];
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      cleanValues.push(value.slice(startString.length));
    }
  }
  return cleanValues.join('-');
}
