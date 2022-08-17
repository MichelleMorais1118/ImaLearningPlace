var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let val = parseInt(input);
var no = [100,50,20,10,5,2,1];

console.log(val);

for(let n of no){
    let q = parseInt(val/n);
    console.log( q +" nota(s) de R$ "+ n+",00");
    val = val % n;
}