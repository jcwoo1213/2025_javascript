//array2.js
let nameAry = new Array();
nameAry.push("홍길동");
nameAry.unshift("고길동");
nameAry.push("박길동");
nameAry.push("홍민수");
nameAry.sort(); //사전 순 정렬
nameAry.reverse();
console.log(nameAry.indexOf("홍길동")); //찾는값의 인덱스 반환 없으면-1
nameAry.forEach((val, idx, ary) => {
  console.log(val);
});

//입력받아서 이름을 목록에서 삭제.
let input = prompt("삭제할 이름을 입력해주세요");
let idx = nameAry.indexOf(input);

if (idx == -1) {
  alert("삭제할 이름이 없습니다");
} else {
  // nameAry.splice(idx, 1);
  nameAry = nameAry.slice(0, idx).concat(nameAry.slice(idx + 1));
}

console.log(nameAry);
