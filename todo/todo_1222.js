//객체(object)
// 붕어빵틀(클래스) ->실체 ->붕어빵(인스턴스)
class Peole {
  //클래스
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showInfo() {
    console.log(`이름은${this.name} 나이는${this.age}`);
  }
}
const person1 = new Peole("홍길동", 20);
const obj = {
  //인스턴스
  name: "hong",
  age: 20,
  showInfo: function () {
    console.log();
  },
};
//내장객체,Document Object Model,Browser Object Model,사용자 정의 객체

//달력만들기
function printCalendar(year, month) {
  //1일 -> 화요일.
  let today = new Date(`${year}-${month}-01`);
  const spaces = today.getDay();
  today.setMonth(month);
  today.setDate(0);
  const lastDate = today.getDate();
  today.setMonth(month - 1);
  today.setDate(0);
  console.log(month - 2);
  const before_last = today.getDate();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let htmlStr = `<table border="2"><caption>${year}년${month}월 달력</caption><thead><tr>`;

  for (let day of days) {
    htmlStr += `<th>${day}</th>`;
  }
  htmlStr += `</tr></thead><tbody>`;
  for (let d = 1 - spaces; d <= lastDate ||(d+spaces)%7!=1; d++) {
    if ((d + spaces) % 7 == 1) htmlStr += `<tr>`;
    if(d>lastDate){
      htmlStr += `<td style=opacity:0.5>${d-lastDate}</td>`;
    }else if(d>0){
      htmlStr += `<td >${d}</td>`;
    }else{
      htmlStr += `<td style=opacity:0.5>${before_last+d}</td>`;
    }
    if ((d + spaces) % 7 == 0) htmlStr += `</tr>`;
  }
  htmlStr += `</tbody></table>`;
  document.writeln(htmlStr);
}
printCalendar(2025,12);