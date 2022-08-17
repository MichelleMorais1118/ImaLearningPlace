var input = require('fs').readFileSync('/dev/stdin', 'utf8');


var [d, c]= input.split("\n");
var cm = d/c;

console.log(cm.toFixed(3) + " km/l");