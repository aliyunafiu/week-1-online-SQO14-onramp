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
