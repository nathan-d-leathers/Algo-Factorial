var fact = require("./factorial.js");

console.log(fact.factorial(8) === 40320);
console.log(fact.factorial(18) === 6402373705728000);
console.log(fact.factorial(45) === 119622220865480194561963161495657715064383733760000000000);
// Test how high of a number your program can calculate. Can you push it further?
// output:
// true
// true
// false

// future challenge:
// figure out how to truncate and return answer in mathmatical form
// factorial(45) =1.196222208654802e+56