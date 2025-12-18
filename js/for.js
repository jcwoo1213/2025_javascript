//for.js
let sum = 0; //값을 누적
//1~5까지 더하기
// sum += 1;
// sum += 2;
// sum += 3;
// sum += 4;
// sum += 5;
for (let i = 1; i <= 100; i++) {
  sum += i;
  // console.log(`sum ->${sum}, i -> ${i}`);
}
console.log("1에서 5까지의 합은:" + sum);