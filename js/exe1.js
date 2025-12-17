//exe1.js
//Math.random() 0~1 사이의 실수값
// Math.ceil() 올림처리
// Math.floor()버림
let x = Math.ceil(Math.random() * 10);
console.log("값:" + x);
console.log("랜덤값은 5이상=" + (x >= 5));
console.log("랜덤값은 짝수=" + (x % 2 == 0));