var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var val = input.split("\n");

var [x1,y1] = val[0].split(" ");
var [x2,y2] = val[1].split(" ");
var d = Math.sqrt((Math.pow((x2-x1),2) + Math.pow((y2-y1),2)));

console.log(d.toFixed(4));