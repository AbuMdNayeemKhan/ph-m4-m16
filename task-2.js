// ### Task-2

// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

// **Input:**
// </br>
// The first line of the input is the marks of the five subjects mentioned above, respectively.
var mathematics = 95;
var biology = 97;
var chemistry = 90;
var physics = 85;
var bangla = 92;
var totalMarks = mathematics + biology + chemistry + physics + bangla;
var avgMarks = (totalMarks / 5);
var avgMarksFixed = avgMarks.toFixed(2);
console.log("Avg Marks is: " + avgMarksFixed + "%");
// **Output:**
// </br>
// Print the result in 2 decimal places.

// ---

// **Sample Input:**
// </br>
// 75.25, 65, 80, 35.45, 99.50

// **Sample Output:**
// </br>
// 71.04