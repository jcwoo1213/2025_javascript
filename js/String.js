//String.js

let str = "hello,world";
//substring()
console.log(str.substring(1, 3)); //(start_idx,end_idx)end 미포함
console.log(str.substring(7)); //start부터 끝까지
console.log(str.indexOf("abc")); //어디에 있는지 없으면-1
console.log("   Hello world   ".trim()); //앞뒤 공백제거
//a=>b 변경
console.log("hello,world".replace("world", "WORLD")); //하나만 변경
//split 잘라서 배열로 만들어줌
console.log(str.split(","));
console.log(str.charAt(2)); //해당위치에 있는 문자 반환
checkGender("980503-1453212");
checkGender("030505-4567123");
checkGender("9805031453212");
checkGender("0305054567123");

function checkGender(jumin) {
  if (jumin.charAt(jumin.length - 7) % 2 == 1) {
    console.log("남자입니다");
  } else {
    console.log("여자입니다");
  }
}
