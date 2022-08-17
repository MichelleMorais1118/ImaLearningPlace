var input = require('fs').readFileSync('/dev/stdin', 'utf8');


var [t,v] = input.split("\n");
var q = t*v;
var c = q/12;

console.log(c.toFixed(3));