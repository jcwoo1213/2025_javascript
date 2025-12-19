//exe3.js

const numAry = [10, 30, 50];

numAry[numAry.length] = 20;
numAry[numAry.length] = 60;
numAry[numAry.length] = 80;
let max = 0;
//반복문을 이용하여 콘솔에 출력
for (let i = 0; i < numAry.length; i++) {
  // if (numAry[i] >= 50) {
  //   console.log(`${i}:${numAry[i]}`);
  // }
  if (max < numAry[i]) {
    max = numAry[i];
  }
  if (i % 2 == 0) {
    console.log(`${i}:${numAry[i]}`);
  }
}
console.log(max);

let members = [
  { id: "user01", name: "홍길동", point: 800 },
  { id: "user02", name: "김문희", point: 756 },
  { id: "user03", name: "박동철", point: 980 },
];
//포인트 합계 ,최고 포인트
let max_point = 0;
let sum = 0;
let table = `<table border="2"><thead><tr><th>아이디</th><th>이름</th><th>포인트</th></thead><tbody>`;
for (const member of members) {
  table += `<tr>`;
  table += `<td>${member.id}</td>`;
  table += `<td>${member.name}</td>`;
  table += `<td>${member.point}</td>`;
  table += `</tr>`;
  sum += member.point;
  if (member.point > max_point) {
    max_point = member.point;
  }
}
table += `</tbody><tfoot><td colspan="2">합계</td><td>${sum}</td></tfoot><table>`;
console.log(`합계:${sum}, 최고포인트:${max_point}`);
document.writeln(table);
