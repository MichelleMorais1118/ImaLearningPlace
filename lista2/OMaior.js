var input = require('fs').readFileSync('/dev/stdin', 'utf8');


var [A, B, C]= input.split(" ").map(item => parseInt(item));
var mab = (A+B+Math.abs(A-B))/2;
var mabc = (C+mab+Math.abs(C-mab))/2;

console.log(mabc + " eh o maior");