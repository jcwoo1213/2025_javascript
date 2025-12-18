//function2
// let result1 = 10;//전역변수
// function sum(num1,num2){
//   console.log(`result:${result1}`);
//   let result= num1 + num2;//지역변수
//   console.log(`${num1}+${num2}=${result}`);
// }
// sum(5,6);
// console.log(`전역 result:${result}`);
//함수:4단을 콘솔에 출력
function gugudan(dan){
  for(let i=1;i<=9;i++){
    console.log(`${dan} * ${i} = ${dan*i}`);
  }
} 
gugudan(5);