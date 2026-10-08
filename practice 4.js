const students = [
  { name: "Jane", grade: 11, gpa: 3.8, isHonors: true },
  { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false },
  { name: "Dakota", grade: 10, gpa: 3.9, isHonors: true },
];

// =================================================================
// PROBLEM 4 — Roster Report
// =================================================================
// Write a function printRoster(students) that uses .forEach() to
// print each student in this format:
//
//   [Grade 11] Jane — GPA: 3.8 ★
//   [Grade 12] ChenZee — GPA: 3.5
//   [Grade 10] Dakota — GPA: 3.9 ★
//
// The ★ appears only if isHonors is true.
// Try solving without the honors first THEN try the star

function printRoster(students) {
    students.forEach(function(student) {
    console.log('[Grade $(students.grade)]' + student.name + " is in grade " + student.grade);
    });  
}

// Test your function — uncomment when ready:
// console.log("\n--- Problem 4 ---");
// printRoster(students);