export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') {
    throw new Error('Inavalid arguments');
  }
  const cleanValues = [];
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      cleanValues.push(value.slice(startString.length));
    }
  }
  return cleanValues.join('-');
}
