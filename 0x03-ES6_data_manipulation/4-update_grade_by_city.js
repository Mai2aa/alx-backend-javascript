export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || typeof city !== 'string' || (!Array.isArray(newGrades))) {
    return [];
  }
  const studentInCity = students.filter((student) => student.location === city);
  return studentInCity.map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: newGrade ? newGrade.grade : 'N/A',
    };
  });
}
