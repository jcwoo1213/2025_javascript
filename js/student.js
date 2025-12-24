//student.js

let students = [
  { studNo: "25-001", studName: "홍길동", score: 90 },
  { studNo: "25-002", studName: "김길동", score: 80 },
  { studNo: "25-003", studName: "최길동", score: 70 },
];

const target = document.querySelector("div.list tbody");
target.innerHTML = "";

makeList();

////////////////////////이벤트////////////////////////
document
  .querySelector('button[class*="primary"]')
  .addEventListener("click", (e) => {
    // console.log("dd");
    const studNo = document.querySelector("#studNo").value;
    const studName = document.querySelector("#studName").value;
    const score = document.querySelector("#score").value;
    if (!studNo || !studName || !score) {
      alert("항목을 입력하세요");
      return;
    }
    if (students.some((elem) => elem.studNo == studNo)) {
      alert("같은 학생이 존재합니다");
      document.querySelector("#studNo").focus();
      //clear();
      return;
    }

    if (score > 100 || score < 0) {
      alert("잘못된점수");
      document.querySelector("#score").focus();
      return;
    }
    students.push({ studNo, studName, score }); //속성과 변수명 불일치시 매치 일치시 매치 생략
    let tr = makeTr({ studNo, studName, score });
    target.appendChild(tr);
    // makeList();
  });

document
  .querySelector('button[class="btn btn-secondary"]')
  .addEventListener("click", (e) => {
    clear();
  });

////////////////////////함수/////////////////////////
function makeList() {
  target.innerHTML = "";
  for (let i = 0; i < students.length; i++) {
    let tr = makeTr(students[i]);
    target.appendChild(tr);
  }
} // end of makelist

function makeTr(student) {
  //tr생성
  let tr = document.createElement("tr");
  let td;
  for (const prop in student) {
    td = document.createElement("td");
    td.innerText = student[prop];
    tr.appendChild(td);
  }
  td = document.createElement("td");
  let del_btn = document.createElement("button");
  del_btn.innerText = "삭제";
  del_btn.className = "btn btn-danger";
  del_btn.id = student.studNo;
  td.appendChild(del_btn);
  console.log(students);
  del_btn.addEventListener("click", del);
  tr.appendChild(td);
  del_btn.setAttribute("data-sno", student.studNo);
  let cor_btn = document.createElement("button");
  cor_btn.innerText = "수정";
  cor_btn.value = student.studNo;
  td = document.createElement("td");
  td.appendChild(cor_btn);
  cor_btn.addEventListener("click", (e) => {
    console.log(e.target.value);
    document.querySelector('button[class*="info"]').disabled = false;
  });
  tr.appendChild(td);

  return tr;
  // document.querySelector("#list >table>tbody").appendChild(tr);
} //end of makeTr
function clear() {
  document.querySelector("#studNo").value = "";
  document.querySelector("#studName").value = "";
  document.querySelector("#score").value = "";
}
function del(e) {
  let target = this.dataset.sno;
  students = students.filter((elem) => elem.studNo != target);

  makeList();
  // let delete_No = e.target.id;
  // let idx = -1;
  // for (let i = 0; i < students.length; i++) {
  //   if (students[i].studNo == delete_No) {
  //     idx = i;
  //     break;
  //   }
  // }
  // students.splice(idx, 1);

  // e.target.parentElement.parentElement.remove();
}
