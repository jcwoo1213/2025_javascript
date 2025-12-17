//if.js
// Math.random() -> 0<=x<1 범위의 값 생성
// 1 ~ 10 임의의 정수값을 생성 
// x의 값이 "짝수입니다"/"홀수입니다" 출력
// let x = Math.ceil(Math.random() * 10);
// let x = Math.floor(Math.random() * 10) + 1;
// console.log('x = ' + x);
// if (x % 2 == 0) { //해당 조건이 true면 실행
//   console.log('짝수입니다'); //콘솔에 log남기기
//   // alert('짝수입니다');//창띄우기
// } else { //해당조건이 flase면 실행
//   console.log('홀수입니다');
//   // alert('홀수입니다');
// }
//x의 값이 홀수이면서 5보다 크거나 같은지 =>조건을 만족합니다/조건을 만족안합니다
// if (x % 2 == 1 && x >= 5) {
//   console.log("조건을 만족합니다");
// } else {
//   console.log("조건을 만족 안합니다");
// }
// 학생 성적 출력 . (0<=x<=100)
let x = Math.ceil(Math.random() * 101);
console.log("x :" + x);
// 90<=x<=100 ->A
// 80<=x<90 ->B
// 60>x ->F
if (x >= 90) {
  console.log("A");
} else if (x >= 80) {
  console.log("B");
} else if (x >= 70) {
  console.log("C");
} else if (x >= 60) {
  console.log("D");
} else {
  console.log("F");
}
console.log("_________________________________________________________________________")
// 3항 연산식
x = Math.ceil(Math.random() * 10);
console.log(x);
(x % 2 == 1 && x >= 5) ? console.log("조건을 만족합니다"): console.log("조건을 만족 안합니다");