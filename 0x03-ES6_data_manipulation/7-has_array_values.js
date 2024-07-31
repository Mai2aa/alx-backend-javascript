export default function hasValuesFromArray(set, array) {
  if (!Array.isArray(array)) {
    return [];
  }
  for (const value of array) {
    if (!set.has(value)) {
      return false;
    }
  }
  return true;
}
