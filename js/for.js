//for.js
let sum = 0; //값을 누적
//1~5까지 더하기
// sum += 1;
// sum += 2;
// sum += 3;
// sum += 4;
// sum += 5;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
//   // console.log(`sum ->${sum}, i -> ${i}`);
// }
// for(let i =1 ;i <= 100;i+=2){
//   sum += i;
// }
//홀수 합 구하기
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 1) {
//     sum += i;
//   }
// }
//1~100중 홀수=oddsum,짝수=evensum
let oddSum = 0;
let evenSum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}
console.log(`홀수 합은 ${oddSum} 짝수 합은 ${evenSum}`);
// console.log("최종 합은:" + sum);
//