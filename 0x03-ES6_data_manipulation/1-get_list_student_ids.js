export default function getListStudentIds(names) {
  if (!Array.isArray(names)) {
    return [];
  }
  return names.map((name) => name.id);
}
