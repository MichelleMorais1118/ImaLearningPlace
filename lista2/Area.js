var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var [A, B, C]= input.split(" ").map(item => parseFloat(item));
var p= 3.14159;

var at = (A*C)/2.0;
var ac = p*Math.pow(C,2);
var atr = ((A+B)*C)/2.0;
var aq = B*B;
var ar = A*B;

console.log("TRIANGULO: "+at.toFixed(3));
console.log("CIRCULO: "+ac.toFixed(3));
console.log("TRAPEZIO: "+atr.toFixed(3));
console.log("QUADRADO: "+aq.toFixed(3));
console.log("RETANGULO: "+ar.toFixed(3));