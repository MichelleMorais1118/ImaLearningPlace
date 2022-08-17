var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var n = parseInt(lines.shift());
var h = parseInt(lines.shift());
var v = parseFloat(lines.shift()).toFixed(2);

var s = parseFloat(h*v).toFixed(2);

console.log("NUMBER = " + n)
console.log("SALARY = U$ " + s);