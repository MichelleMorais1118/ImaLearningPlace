var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var m = (60*input)/30;
console.log(m + " minutos");