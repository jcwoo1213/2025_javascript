//array.js

const numAry = [10, 20, 30]; //new Array();
const chrAry = ["a", "b", "c"];
const str = "hello";
numAry.push(40); //맨뒤에 추가
numAry.unshift(50); //맨앞에 추가
numAry.pop(); //맨뒤에 삭제
numAry.shift(); //맨앞에 삭제
console.log(`numAry =>${numAry}`);
// str.push("world");
const newAry = numAry.concat(chrAry); //배열합치기
console.log(`newAry ->${newAry.join("/")}`);
numAry.splice(1, 0, 1, 2); //첫번째:위치 두번째:수정할 대상의 크기(0이면 추가) 세번째 이후:대체할값(넣지않으면 삭제)
console.log(`numAry =>${numAry}`);
console.log(numAry.slice(1, 2)); //뒤에 자리는 포함되지 않음(뒤에 생략이 끝까지)
numAry.forEach((val, idx, ary) /*요소,인덱스,배열 */ => {
  console.log(`첫번째:${val},두번째:${idx},세번째:${ary}`);
});
numAry.forEach((val, idx, ary) /*요소,인덱스,배열 */ =>
  idx % 2 == 0 ? console.log(val) : "");
