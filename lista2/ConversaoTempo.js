var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let q = parseInt(input);

var val = [3600, 60, 1];
var r = [];

for(let v of val){
    r.push(parseInt(q/v));
    q = q%v;
}

console.log(r.join(":"));