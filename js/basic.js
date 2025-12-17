//변수선언, 연산자 활용
    // 이름 저장하는 변수 선언-> 이름 저장
    let name = '홍길동';
    // 혈액혈
    let bloodType = 'AB';
    // 키 선언
    let height = 175;
    let weight = 80;
    //논리형
    //성인,미성년 구분
    let isAdult = true; //false

    let sum = 10 + 20;
    console.log(sum);
    console.log('sum의 값은 ' + sum + ' 입니다');

    //내 이름은 정찬우 입니다.
    console.log('내 이름은 ' + name + ' 입니다.');

    //+,-,*,/,%
    let num1 = 10;
    let num2 = 5;
    let result = 0;
    console.log('연산 전:' + result);
    result = num1 + num2;
    console.log('+결과:' + result);
    result = num1 - num2;
    console.log('-결과:' + result)
    result = num1 * num2;
    console.log('*결과:' + result);
    result = num1 / num2;
    console.log('/결과:' + result);
    result = num1 % num2;
    console.log('%결과:' + result);
    result++; //result = result +1;
    console.log(result);
    result += 2;
    console.log(result);
    result *= 2;
    console.log(result);
    result %= 5;
    console.log(result);
    result = result > 10;
    result += 3; //result = true + 3; true = 1 false = 0 
    console.log(result);
    result = 'hello' - 3; //연산 불가시 Nan 출력
    result = result - 3;
    console.log(result);