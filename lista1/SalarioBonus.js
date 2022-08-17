var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


var n = String(lines.shift());
var f = parseInt(lines.shift());
var v = parseFloat(lines.shift()).toFixed(2);

var s = parseFloat(f +(v*0.15)).toFixed(2);

console.log("TOTAL = R$ " + s);