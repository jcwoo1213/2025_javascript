//math.js

Math.random(); //클래스,메소드 호출(정적 static)
console.log(Math);
console.log(Math.ceil(3.1));
//51(포함)~100
function numberGame() {
  const answer = Math.floor(Math.random() * 50) + 51;
  let count = 0;
  console.log(answer);
  while (true) {
    count++;
    let input = prompt("51~100 사이의 값을 입력하세요");

    if (input > answer) {
      alert("down");
    } else if (input < answer) {
      alert("up");
    } else {
      alert(`정답입니다 ${count}회 입력하셨습니다`);
      break;
    }
  }
}
numberGame();
