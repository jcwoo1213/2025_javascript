//todo1218.js
//git pull
//Math.random() 활용.31~100 까지 생성
//5번 실행.
//합계, 평균,최대값 구하기 => "합계:얼마, 평균:얼마,최대값:얼마"
//함수로 만들기 함수명:scoreInfo
function scoreInfo(){
    let max=0;
    let sum=0;
    for(let i=1 ;i<=5;i++){
        let score=Math.floor(Math.random()*69)+31;
        if(score>max){
            max=score;
        }
        sum+= score;
    }
    console.log(`합계:${sum},평균:${sum/5},최대값:${max}`);
}
//실행 횟수 매개값 받기
function scoreInfo2(count){
    let max=0;
    let sum=0;
    for(let i=1 ;i<=count;i++){
        let score=Math.floor(Math.random()*69)+31;
        if(score>max){
            max=score;
        }
        sum+= score;
    }
    console.log(`합계:${sum},평균:${sum/count},최대값:${max}`);
}
scoreInfo();
//git add .
//git commit -m ""
// git push origin main