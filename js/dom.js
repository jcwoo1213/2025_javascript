//dom.js
document.querySelector("#add").addEventListener("click", (e) => {
  //구현 기능
  e.target.style.backgroundColor = "yellow";
});
document.querySelectorAll("button").forEach((element) => {
  element.addEventListener("mouseover", (e) => {
    e.target.style.color = "red";
  });
});
document.querySelectorAll(".small").forEach((element) => {
  element.addEventListener("click", (e) => {
    // console.log(e);
    document.querySelector("#prod-pic>img").src = e.target.src;
  });
});
let target = document.querySelector("#detail"); //(오직 인라인)
// let test = getComputedStyle(detail);
// console.log(test.display);

document.querySelector("#view").addEventListener("click", (e) => {
  // console.log(e);
  if (target.style.display == "block") {
    target.style.display = "none";
    e.target.textContent = "상세 설명 보기";
  } else {
    target.style.display = "block";
    e.target.textContent = "상세 설명 닫기";
  }
});
