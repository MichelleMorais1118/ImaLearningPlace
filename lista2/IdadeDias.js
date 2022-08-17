var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let d = parseInt(input);
let a,m;
a = parseInt(d / 365);
d = d % 365;

m = parseInt(d / 30);
d = d % 30;

console.log(a + " ano(s)");
console.log(m + " mes(es)");
console.log(d + " dia(s)");