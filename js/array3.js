//array3.js
//filter()=> true반환 하는 요소를 새로운 배열에 추가.

const filterAry = [10, 20, 30, 40, 50].filter((Element, idx, ary) => {
  // if (Element >= 30) {
  //   return true;
  // } else {
  //   return false;
  // }
  return Element >= 30;
});
console.log(filterAry);
const friends = ["박상원", "장수연", "양현규", "정찬우", "서영준"];

let input = prompt("삭제할 이름을 입력하세요");
let idx = friends.indexOf(input);
if (idx == -1) {
  alert("이름이 없습니다");
}
const filtered = friends.filter((val, idx, arr) => {
  return val != input;
});
console.log(filtered);
