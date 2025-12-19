//event.js
//화면영역에서 키보드 마우스 ->동작 -이벤트  - 이벤트핸들러(함수)
//이벤트 - 이벤트 핸들러
//버튼(클릭) -이벤트핸들러 등록
// document.querySelector('선택자') ->화면요소 찾아서 반환
// console.dir(document.querySelector('button'));
document.querySelector("button").addEventListener("click", function () {
  console.log("click");
  //이벤트 핸들러(this는 이벤트를 받는 대상)
  console.log(this);
  this.style.backgroundColor = "red";
  this.style.color = "white";
  this.innerHTML = "event";
}); //매개변수 2개 1)이벤트 유형,2)이벤트 핸들러(함수);

document.querySelector("button").addEventListener("mouseover", (e) => {
  //이벤트핸들러(this:window객체)
  console.log("mouse over");
  console.log(e.target);
  e.target.style.color = "blue";
});
function listclickFnc(event) {
  console.log(event.target.innerHTML); //event.target->이벤트 대상
}
function mouseOverFnc(event) {
  event.target.style.backgroundColor = "yellow";
}
function mouseOutFnc(event) {
  event.target.style.backgroundColor = "white";
}

let allList = document.querySelectorAll("#first>li");
console.log(allList);
for (const list of allList) {
  list.addEventListener("click", listclickFnc);
  list.addEventListener("mouseover", mouseOverFnc);
  list.addEventListener("mouseout", mouseOutFnc);
}
