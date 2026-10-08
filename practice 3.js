const students = [
  { name: "Jane", grade: 11, gpa: 3.8, isHonors: true },
  { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false },
  { name: "Dakota", grade: 10, gpa: 3.9, isHonors: true },
];

// =================================================================
// PROBLEM 3 — Searching an Array of Objects
// =================================================================
// Write a function findByName(students, targetName) that:
//   - Uses .find() to return the student object with that name
//   - Returns null if no match is found
//
// Expected output:
//   findByName(students, "ChenZee") → { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false }
//   findByName(students, "Marcus")  → null

function findByName(students, targetName) {
    find = students.find((students) => students.name === targetName)
    if (find === undefined){
        find = "null"
    }
    return find
}

// Test your function — uncomment when ready:
// console.log("\n--- Problem 3 ---");
console.log(findByName(students, "ChenZee"));
console.log(findByName(students, "Jane"));
console.log(findByName(students, "Marcus"));