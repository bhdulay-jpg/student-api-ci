const students = [
  {
    id: 1,
    name: "Juan Dela Cruz",
    course: "BSIT",
  },
  {
    id: 2,
    name: "Maria Santos",
    course: "BSCS",
  },
  {
    id: 3,
    name: "Pedro Reyes",
    course: "BSEMC",
  },
];

function getStudents() {
  return students;
}

function getStudentById(id) {
  return students.find((student) => student.id === Number(id));
}

function countStudents() {
  return students.length;
}

module.exports = {
  getStudents,
  getStudentById,
  countStudents,
};
