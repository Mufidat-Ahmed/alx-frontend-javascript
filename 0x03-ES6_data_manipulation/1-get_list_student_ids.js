export default function getListStudentIds(aray) {
  if (!Array.isArray(aray)) {
    return []
  }
	return aray.map((student) => student.id);
}
