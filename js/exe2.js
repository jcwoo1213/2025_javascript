//exe2.js
//가위바위보 게임.
//1->가위 2->바위 3->보
// You Win!/You Lost!/Same!
let com=Math.floor(Math.random()*3)+1;
let input=prompt("1->가위 2->바위 3->보");
console.log(`input:${input} com:${com}`);
// if(com==1&&input==1){
//   console.log("Same");
// }else if(com==1&&input==2){
//   console.log("You Win");
// }else if(com==1&&input==3){
//   console.log("You Lose");
// }else if(com==2&&input==1){
//   console.log("You Lose");
// }else if(com==2&&input==2){
//   console.log("Same");
// }else if(com==2&&input==3){
//   console.log("You Win");
// }else if(com==3&&input==1){
//   console.log("You Win");
// }else if(com==3&&input==2){
//   console.log("You Lose");
// }else if(com==3&&input==3){
//   console.log("Same");
// }
// if(com==input){
//   console.log("Same");
// }else if (com==1&&input==2){
//   console.log("You Win");
// }else if (com==1&&input==3){
//   console.log("You Lose");
// }else if (com==2&&input==3){
//   console.log("You Win");
// }else if (com==2&&input==1){
//   console.log("You Lose");
// }else if (com==3&&input==1){
//   console.log("You Win");
// }else if (com==3&&input==2){
//   console.log("You Lose");
// }
// switch(com){
//   case 1:
//     if(input==1){
//       console.log("same");
//     }else if(input==2){
//       console.log("You Win");
//     }else{
//       console.log("You Lose");
//     }
//     break;
//   case 2:
//     if(input==1){
//       console.log("You Lose");
//     }else if(input==2){
//       console.log("same");
//     }else{
//       console.log("You Win");
//     }
//     break;
//   case 3:
//     if(input==1){
//       console.log("You Win");
//     }else if(input==2){
//       console.log("You Lose");
//     }else{
//       console.log("same");
//     }
//     break;
// }