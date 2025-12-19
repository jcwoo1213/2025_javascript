//function3 
//함수표현식
const sum =function (a, b) {
  return a + b;
};
let result = sum(2,3);
console.log(`sum: ${result}`);

const plus = sum;
console.log(plus(3,4));

//즉시실행함수
result = (function (x,y){
  return x>y ? x : y;
})(4,29);
console.log(result)

//화살표함수 (매개변수) =>{기능구현}
// const hi = (name) => {
//   return `hello! ${name}`;
// }
const hi = (name) => `hello! ${name}`;

console.log(hi('홍길동'));