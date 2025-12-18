//function.js

//두 수를 비교해서 큰 수를 출력 기능
//함수 선언
function showMax(a, b /*매개변수*/ ) {
  if (a > b) {
    console.log(`큰값은 ${a}`);
  } else {
    console.log(`큰값은 ${b}`)
  }
}
let n1 = 10;
let n2 = 20;

// if (n1 > n2) {
//   console.log(`큰값은 ${n1}`);
// } else {
//   console.log(`큰값은 ${n2}`);
// }
//함수 호출
showMax(n1, n2 /*인자값 매개값 */ );
let m1 = 30;
let m2 = 40;

function getmulti(num1, num2) {
  // console.log(`${num1} * ${num2}은 ${num1*num2}`);
  let result= num1 * num2;
  return result;
}
console.log(getmulti(m1, m2));

// if (m1 > m2) {
//   console.log(`큰값은 ${m1}`);
// } else {
//   console.log(`큰값은 ${m2}`);
// }
showMax(n1, n2);

//매개변수 2개 2개의 곱을 콘솔에 출력하는 함수.
