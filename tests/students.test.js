const {
  getStudents,
  getStudentById,
  countStudents,
} = require("../api/students");

test("should return all students", () => {
  const students = getStudents();

  expect(students.length).toBeGreaterThan(0);
});

test("should find student with ID 1", () => {
  const student = getStudentById(1);

  expect(student.name).toBe("Juan Dela Cruz");
});

test("should return undefined for unknown student", () => {
  const student = getStudentById(999);

  expect(student).toBeUndefined();
});

test("should contain three students", () => {
  expect(countStudents()).toBe(10);
});
