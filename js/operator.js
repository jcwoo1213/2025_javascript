// operator.js
console.log("abc");

let result = 10 == 5;

let num1 = 10;//숫자타입
let num2 = 25;
let str1 = '10';//문자타입
let str2 = '25';
result = num1 >= num2;
console.log("num1 >= num2:"+result);
result = num1 === str1;//값 + 데이터타입 비교
console.log("num1 === str1:"+result);
result = num1 != num2;
console.log("num1 != num2:"+result);
//논리 연산자
result = num1 > num2 || num1 == str1;
console.log("num1 > num2 || num1 == str1:"+result);
result = num1 > num2 && num1 == str1;
console.log("num1 > num2 && num1 == str1:"+result);
result = !(num1 > num2 && num1 == str1);
console.log("!(num1 > num2 && num1 == str1):"+result);
result = !result;
console.log("!result:"+result);
console.log("가나다".charCodeAt(0));
console.log("ddd");
