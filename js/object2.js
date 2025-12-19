//object2.js
//객체 + 배열 활용
//학생번호,이름,연락처,시험점수
const studentAry =[
  {stdNo: '25-0001',stdName: '홍길동',phone:'010-1111-2222',score:70},
  {stdNo: '25-0002',stdName: '김길동',phone:'010-1212-3434',score:80},
  {stdNo: '25-0003',stdName: '고길동',phone:'010-2323-3434',score:75},
  {stdNo: '25-0004',stdName: '박길동',phone:'010-1414-2323',score:95},

];
console.log(studentAry[1].stdName);
// let sum = studentAry[0].score + studentAry[1].score + studentAry[2].score;
let sum=0;
let htmlStr='<ul>';
for(let student of studentAry){
  sum += student.score;
  // htmlStr += '<li>'+student.stdName+'</li>';
  htmlStr += `<li>${student.stdName}(${student.score}점)</li>`;
}
htmlStr += `<li>합계점수(${sum}점)`;
htmlStr += '</ul>';
console.log(`합계:${sum} 평균:${sum/studentAry.length}`);
document.writeln(htmlStr);