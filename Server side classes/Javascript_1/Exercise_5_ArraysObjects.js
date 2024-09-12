// Define a Student object with properties: name, id, and grades (an array of numbers)
const student = {
  name: "Alice Johnson",
  id: 101,
  grades: [],
};

// Function to add a grade to the student's grades array
function addGrade(studentObj, grade) {
  studentObj.grades.push(grade);
  console.log(`Grade ${grade} added to ${studentObj.name}'s record.`);
}

// Function to update the student's name
function updateStudentName(studentObj, newName) {
  studentObj.name = newName;
  console.log(`Student's name has been updated to: ${studentObj.name}`);
}

// Test the functions

// Add a few grades to the student
addGrade(student, 85);
addGrade(student, 90);
addGrade(student, 78);

// Update the student's name
updateStudentName(student, "Alice Smith");

// Print the updated student object
console.log("Updated Student Object:", student);
