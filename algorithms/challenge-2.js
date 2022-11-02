function fizzBuzz(input){
    var n = Math.floor((Math.random() * 1000) + 1);
    if (n) {
      var output = "";
      if (n % 3 == 0)
        output += "fizz";
      if (n % 5 == 0)
        output += "buzz";
      prompt(output || n);
    }
    console.log(n);
  
}


module.exports = fizzBuzz
//Implement a function fizzBuzz(input) that takes a number and retuns:
//"fizz": if the number is divisible by 3
//"buzz": if the number is divisible by 5
//"fizzbuzz": if the number is both divisible by 3 and 5
//number: if it is not divisible by 3 or 5