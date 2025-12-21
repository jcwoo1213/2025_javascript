//화살표함수(ES6)

//데이터유형(객체,배열)

//이벤트

//친구(이름,연락처,생일:'yy-dd-mm',키:163.5)
//4명 생성 => friends 배열에 저장
//친구평균키, 가장 큰 키(이름)
//테이블로 그리기
const freinds=[
    {name:"홍길동",tel:"010-1111-2222",birthday: "00-11-22",tall: 175.2},
    {name:"김길동",tel:"010-2323-3333",birthday: "95-12-23",tall: 170.3},
    {name:"박길동",tel:"010-3434-4444",birthday: "03-05-07",tall: 172.9},
    {name:"고길동",tel:"010-4545-5555",birthday: "01-09-04",tall: 180.2}
]
let htmlStr ="";
let max=0;
let sum=0;
let max_name="";
htmlStr +=`<table border="2"><thead><tr><th>이름</th><th>전화번호</th><th>생일</th><th>키</th></tr></thead><tbody>`;
for (const friend of freinds) {
    htmlStr +=`<tr>`;
    htmlStr +=`<td>${friend.name}</td><td>${friend.tel}</td><td>${friend.birthday}</td><td>${friend.tall}</td>`
    htmlStr +=`</tr>`;
    sum += friend.tall;
    if(max<friend.tall){
        max=friend.tall;
        max_name=friend.name;
    }
}
htmlStr += `</tbody><tfoot><tr><td colspan="3">가장 큰 키:</td><td>${max}(${max_name})</td><tr><td colspan=3>키의 평균</td><td>${sum/4}</td></tr></tfoot></table>`;
document.writeln(htmlStr);
