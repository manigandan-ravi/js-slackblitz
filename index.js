
// add
function add(num1,num2){
  res =  num1+num2;
  return `sum(${num1},${num2}) : ${res}`;
}
//subtract
function sub(num1,num2){
  res = num1-num2;
  return `subtract(${num1},${num2}) : ${res}`;
}
//Multiplication
function mul(num1,num2){
  res = num1*num2;
  return `multiplicaiton(${num1},${num2}) : ${res}`;
}
//division
function div(num1,num2){
  res = num1/num2;
  return `division(${num1},${num2}) : ${res}`;
}
//Mod
function mod(num1,num2){
  res = num1%num2;
  return `remainder(${num1},${num2}) : ${res}`;
}
//Power Of
function powerOf(num1,num2){
  res = num1**num2;
  return `powerOf(${num1},${num2}) : ${res}`;
}
//compare two num 
//compare two string
function cmp(num1,num2){
return  (num1===num2)?`comparisonOf(${num1},${num2}) : Equal`:`comparisonOf(${num1},${num2}) : Not Equal`;
}

function cmpType(num1,num2){
  return (typeof(num1)===typeof(num2))?cmp(num1,num2):`comparisonOf(${num1},${num2}) : Both are of different types`;
}

let result = add(2,3);
console.log(result);
let result = sub(2,3);
console.log(result);
let result = mul(2,3);
console.log(result);
let result = div(2,3);
console.log(result);
let result = mod(2,3);
console.log(result);
let result = powerOf(2,3);
console.log(result);
let result = cmpType(2,3);
console.log(result);
let result = cmpType(2,2);
console.log(result);
let result = cmpType("hi","hi");
console.log(result);
let result = cmpType("hi","hey");
console.log(result);
let result = cmpType(1,"hey");
console.log(result);
