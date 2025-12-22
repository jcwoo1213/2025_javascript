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
