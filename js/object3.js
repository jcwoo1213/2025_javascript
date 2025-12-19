//object3.js
const studentAry =[
  {stdNo: '25-0001',stdName: '홍길동',phone:'010-1111-2222',score:70},
  {stdNo: '25-0002',stdName: '김길동',phone:'010-1212-3434',score:80},
  {stdNo: '25-0003',stdName: '고길동',phone:'010-2323-3434',score:75},
  {stdNo: '25-0004',stdName: '박길동',phone:'010-1414-2323',score:95}
];
let htmlStr =`<table border="2">`;
htmlStr +="<thead><tr>";
htmlStr +=`<th>학생번호</th><th>이름</th><th>연락처</th><th>점수</th>`;
htmlStr += "</tr></thead>";
htmlStr += "<tbody>";
for (const student of studentAry) {
  htmlStr += "<tr>";
  htmlStr += `<td>${student.stdNo}</td>`;
  htmlStr += `<td>${student.stdName}</td>`;
  htmlStr += `<td>${student.phone}</td>`;
  htmlStr += `<td>${student.score}</td>`;
  htmlStr += "</tr>";
}
// for (const student of studentAry) {
//   htmlStr +="<tr>";
//   for (const element in student) {
//     htmlStr += `<td>${student[element]}</td>`;
    
//   }
//   htmlStr +="</tr>";
// }
htmlStr +="</tbody></table>";
document.writeln(htmlStr);
