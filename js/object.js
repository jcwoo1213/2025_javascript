//object.js
//객체 타입 = {속성:값, 속성:값}
// const student = "홍길동,25-0001,010-1111-2222";
const obj = {
  name: '홍길동',
  stdNo: '25-0001',
  phone: '010-1111-2222',
  bloodType: 'AB',
  showInfo: function () { //메소드:객체 안에 있는 함수
    console.log(`학번= ${obj.stdNo}, 이름= ${obj.name}`);
  },
  friends: ["김길동", "홍길동", "박길동"]
}; //복합유형(객체)

obj.name = '김길동' //변수명.속성 ="값", 변수명[속성]="값"
obj["phone"] = "010-1212-3434";
console.log(obj);
console.log(obj.name);
console.log(obj["phone"]);
console.log(obj.stdNo);
console.log(`첫번째 친구:${obj.friends[0]}`);
obj.showInfo();
//타입 혼용 가능하나 권장x
const numAry = [20, 17, 30, 25, 22, "hello", true];
numAry[2] = 40;

console.log(numAry); //첫번째 배열
numAry[2];
for (let i = 0; i <= 4; i++) {
  console.log(`numAry[${i}]= ${numAry[i]}`);
}

console.log(numAry.length);

for (let i = 0; i < numAry.length; i++) {
  console.log(numAry[i]);
}

//홍길동,박길동,최길동
//이름은 nameAry
const nameAry = ["홍길동", "박길동", "최길동"];
nameAry[nameAry.length]="김길동";
console.log(nameAry);
//for of 배열의 경우
for (const name of nameAry) {
  console.log(name);
}
//for in ->객체일때
for (const prop in obj) {
  console.log(`속성 => ${prop}, 값 => ${obj[prop]}`);
}
console.log('---------------------------------------------------------')
//속성 추가
obj.hobby =["게임","독서","캠핑"];
for (const prop in obj) {
  console.log(`속성 => ${prop}, 값 => ${obj[prop]}`);
}
//속성삭제
console.log('---------------------------------------------------------')
delete obj.bloodType;
for (const prop in obj) {
  console.log(`속성 => ${prop}, 값 => ${obj[prop]}`);
}
  
 
