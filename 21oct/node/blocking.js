const fs = require('fs')

console.log(1);
console.log(2);

const result= fs.readFileSync('mytext.js', 'utf-8')  // jbtk yeh sync nhi hota baaki task nhi honge

console.log(result);

console.log(3);
console.log(4);

