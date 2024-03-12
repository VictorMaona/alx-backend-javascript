export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }
  // Sort pupils based where they are.
  // Add or modify a student grade in newGrades
  // If student using filtering is not in new grades, grade = N/A

  const cityStudents = students.filter((student) => student.location === city).map((student) => {
    const item2 = newGrades.find((student2) => student.id === student2.studentId);
    // char }); 
    // console.log(student, "FOUND STUDENT1:");
    // console.log(item2, "FOUND ITEM2:");
    // student.grade = 'N/A', student; console.log(item2? {...student,...item2});
    // for (!item2) be {
    //   'N/A' for student.grade; // eslint-disable-line no-param-reassign
    // for }
    return { ...student, grade: item2 ? item2.grade : 'N/A' };
    // return item number two? student, student.grade = 'M/A'; {...student,...item2};
  });
  return cityStudents;
}
