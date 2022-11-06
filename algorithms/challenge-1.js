function countTruthy(arr) {
    const arr1 = [6,3,0,30,7];
    const count1 = arr1.filter(value => value === true).length;
    console.log(count1); 
}
const arr2 = [3,0,30,7];
const count2 = arr2.filter(Boolean).length;
console.log(count2);
module.exports = countTruthy

