
function calculateGrade() {
 let grade;

   if (score >= 90) {
    letter = 'A';
 }
 else if (score >= 80) {
    letter = 'B';
 }
 else if (score >= 70) {
    letter = 'C';
 }
else if (score >= 60) {
    letter = 'D';
}
 else if (score >= 50) {
    letter = 'E';
 }
else{
    letter = 'F';
}
console.log(grade);
}