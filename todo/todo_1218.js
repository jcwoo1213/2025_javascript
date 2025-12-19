//todo1218.js
//git pull
//Math.random() 활용.31~100 까지 생성
//5번 실행.
//합계, 평균,최대값 구하기 => "합계:얼마, 평균:얼마,최대값:얼마"
//함수로 만들기 함수명:scoreInfo
function scoreInfo() {
    let max = 0;
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
        let score = Math.floor(Math.random() * 69) + 31;
        if (score > max) {
            max = score;
        }
        sum += score;
    }
    console.log(`합계:${sum},평균:${sum/5},최대값:${max}`);
}
//실행 횟수 매개값 받기
function scoreInfo2(count) {
    let max = 0;
    let sum = 0;
    for (let i = 1; i <= count; i++) {
        let score = Math.ceil(Math.random() * 70) + 30;
        if (score > max) {
            max = score;
        }
        sum += score;
    }
    console.log(`합계:${sum},평균:${sum/count},최대값:${max}`);
}
scoreInfo();
//git add .
//git commit -m ""
// git push origin main

//1~10까지 숫자를 더하는 반복문
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(`sum:${sum}`);

//1~10까지 홀수만 더하는
sum = 0;
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 1) {
        sum += i;
    }
}
console.log(`sum:${sum}`);

function oddSum() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 1) {
            sum += i;
        }
    }
    console.log(sum);
}
oddSum();
// 함수:sumup() /1 ~ 5 까지의 합. 반환
//그것을 result에 저장.
function sumUp(){
    let sum=0;
    for(let i=1;i<=5;i++){
        sum += i;
    }
    return sum;
}
let result = sumUp();
console.log(`result:${result}`);