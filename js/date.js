//date.js

let today = new Date("2025-01-01T10:00:00");
console.log(today.getMonth()); //0(1월)~11(12월)
console.log(today.getDate()); //1부터 시작 (일)
console.log(today.getDay()); //일(0)~토(6)
today = new Date("2025-02-22");
today.setFullYear(2023);
today.setMonth(11);
today.setDate(31);
today.setFullYear(1970);
today.setMonth(0);
today.setDate(1);
today.setHours(0);
today.setMinutes(0);
today.setSeconds(0);
today = new Date();
console.log(today.getTime()); //1970.01.01 +9시간 기준 1ms 증가
// console.log(today);
const aday = new Date("2025-12-21 10:00:00");
const diff = (today.getTime() - aday.getTime()) / 1000;
let second = Math.floor(diff % 60);
let min = Math.floor((diff / 60) % 60);
let hour = Math.floor(diff / 60 / 60);
console.log(`시:${hour},분:${min},초:${second}`);
switch (today.getDay()) {
  case 0:
    console.log("일요일");
    break;
  case 3:
    console.log("수요일");
    break;
  case 6:
    console.log("토요일");
    break;
}

//달력 그리기
function printCalendar(year, month) {
  //1일 -> 화요일.
  let today = new Date(`${year}-${month}-01`);
  const spaces = today.getDay();
  today.setMonth(month); //이번달의 마지막날 받기위해 다음달 0일(현재달 마지막날)로 이동
  today.setDate(0);
  const lastDate = today.getDate(); //출력할 달의 마지막날
  today.setMonth(month - 1);
  today.setDate(0);
  const before_last = today.getDate(); //출력할 달의 전 달의 마지막날
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let htmlStr = `<table border="2"><colgroup><col style=background-color:rgba(255,0,0,0.3)><col span=5><col style=background-color:rgba(0,0,255,0.3)></colgroup><caption>${year}년${month}월 달력</caption><thead><tr>`;

  for (let day of days) {
    htmlStr += `<th>${day}</th>`;
  }
  htmlStr += `</tr></thead><tbody>`;
  for (let d = 1 - spaces; d <= lastDate || (d + spaces) % 7 != 1; d++) {
    if ((d + spaces) % 7 == 1) htmlStr += `<tr>`;
    if (d > lastDate) {
      //이번달은 모두 출력하였고 다음달 표시
      htmlStr += `<td style=opacity:0.5>${d - lastDate}</td>`;
    } else if (d > 0) {
      //이번달 표시
      htmlStr += `<td >${d}</td>`;
    } else {
      //저번달 표시
      htmlStr += `<td style=opacity:0.5>${before_last + d}</td>`;
    }
    if ((d + spaces) % 7 == 0) htmlStr += `</tr>`;
  }
  htmlStr += `</tbody></table>`;
  document.querySelector("#calendar").innerHTML = htmlStr;
}
//객체, 메소드 =>
function printDay(date = new Date() /*매개변수 없으면 기본값*/) {
  switch (date.getDay()) {
    case 0:
      console.log("일요일");
      break;
    case 1:
      console.log("월요일");
      break;
    case 2:
      console.log("화요일");
      break;
    case 3:
      console.log("수요일");
      break;
    case 4:
      console.log("목요일");
      break;
    case 5:
      console.log("금요일");
      break;
    case 6:
      console.log("토요일");
      break;
  }
}
let a;
console.log(a);
// printDay(new Date("2025-01-03"));
// printDay(new Date());
// printDay();
const year_input = document.querySelector("#yyyy");
const month_input = document.querySelector("#mm");

let printed = false;
document.querySelector("#btn").addEventListener("click", (e) => {
  let year = parseInt(document.querySelector("#yyyy").value);
  let month = parseInt(document.querySelector("#mm").value);
  if (!printed) {
    printed = true;
    e.target.innerText = "달력지우기";
    printCalendar(year, month);
  } else {
    printed = false;
    e.target.innerText = "달력출력";
    document.querySelector("#calendar").innerHTML = "";
  }
});
document.querySelector("#last").addEventListener("click", (e) => {
  month_input.value--;
  if (month_input.value == 0) {
    month_input.value = 12;
    year_input.value--;
  }

  if (printed) printCalendar(year_input.value, month_input.value);
});
document.querySelector("#next").addEventListener("click", (e) => {
  month_input.value++;
  if (month_input.value == 13) {
    month_input.value = 1;
    year_input.value++;
  }

  if (printed) printCalendar(year_input.value, month_input.value);
});
// printCalendar(2025, 12);
