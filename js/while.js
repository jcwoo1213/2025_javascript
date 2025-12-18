//while.js
//1부터 5까지 반복
// for (let i = 1; i <= 5; i++) {
//   console.log(`i= ${i}`);
// }
// for(let i=5;i>=1;i-=2){
//   console.log(`i=${i}`);
// }
//while(조건){실행블럭}
// let i = 1;
// while (i <= 5) {
//   console.log(`i=${i}`);
//   i++;
// }
//조건을 만족할 동안에만 실행
// while(true){
//   let num= Math.ceil(Math.random()*10);//1~10 임의의 수 생성
//   console.log(`num:${num}`);
//   if(num==9){
//     break;//num이 9가되면 반복문 종료
//   }
// }
//숫자를 입력받아서 합을 구하고 quit 입력하면 반복 종료
// let sum=0;
// while(true){
//   let input = prompt('숫자를 입력하세요. 종료하려면 quit 입력');
  
//   if(input=="quit"){
//     break;
//   }
//   input= parseInt(input);//prompt는 기본타입이 문자라서 형변환
  
//   sum += input;
//   console.log(sum);
// }
// console.log(`총합:${sum}`);
//Math.random() -> 1~10 값 생성, 5가나오면 종료 그전까지 sum에 누적(5가나와도 sum누적후 종료)
// let sum=0;
// while(true){
//   let val=Math.floor(Math.random()*10)+1;
//   sum += val;
//   console.log(`랜덤값: ${val}, 지금까지의 합: ${sum}`);
//   if(val==5){
//     console.log('종료');
//     break;
//   }
// }
// console.log(`총합:${sum}`);
// 학생의 점수입력 => quit(종료)
// 전체의 평균 = 합계점수/인원수
// let sum=0;
// let count=0;
// let max=0;
// while(true){
//   let input=prompt('점수를 입력하세요 quit입력시 종료');
//   if(input=='quit'){
//     break;
//   }
//   sum+=parseInt(input);
//   count++;
//   console.log(`인원수: ${count}, 누적합: ${sum}`);
//   if(max<input){
//     max=input;
//   }
// }
// console.log(`최종 평균은 ${sum/count} 점, 최고점수: ${max}점`);

