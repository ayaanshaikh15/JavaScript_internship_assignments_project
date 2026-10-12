// Assignment 3: Conditional Logic Implementation

let score = 85;

// if...else to find the grade range
let range;
if (score >= 90) {
  range = "A";
} else if (score >= 80) {
  range = "B";
} else if (score >= 70) {
  range = "C";
} else {
  range = "F";
}

// switch to set the letter grade
let grade;
switch (range) {
  case "A":
    grade = "A";
    break;
  case "B":
    grade = "B";
    break;
  case "C":
    grade = "C";
    break;
  default:
    grade = "F";
}

// ternary operator for pass or fail
let status = score >= 40 ? "Passed" : "Failed";

console.log("Score: " + score);
console.log("Grade: " + grade);
console.log("Status: " + status);
