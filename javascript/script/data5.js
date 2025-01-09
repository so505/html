//연결연산자와 더하기 연산자
let data1='hello'+'js';//문자+무자(연결연산자)
let data2='1'+2; //문자+숫자 (연결연산자)
let data3=(1+1)+'number'; //(숫자+숫자)+문자  더하기연산자,연결연산자
let data4='num'+(2-2)+'ber'; //문자+(숫자-숫자)+문자
let data5=4;   //재료변수
let data6=2;  // 재료 변수
let result=data5+data6;   //재료 이용 결과 담는 변수
//나누기와 나머지 연산자 //나머지연산자 홀수짝수 나눌때 많이사용,주민번호통계 (공학용계산기 10mod3=1)
let data7=10;
let data8=3
let result2=data7/data8;
console.log(result2);
result2=data7%data8;
console.log(result2); // 1

let data9=5;
let data10=data9+10; //10< 일회성으로 사용할때 변수없이 바로 쓰기도한다. 공통고정값(예)생일자+1)
let result3=data10;
console.log(result3);

console.log(data1,typeof data1); //변수값확인, 변수데이터종류확인
console.log(data2,typeof data2); //12 string
console.log(data3,typeof data3); //2number string
console.log(data4,typeof data4); //num0ber string
console.log(result); //6 더하기 결과 출력 
result=data5-data6;  
console.log(result);
result=data5*data6;
console.log(result);
result=data5/data5;
console.log(result);
result=data5%data5; //나머지 . 값 0,1 두개만 있음
console.log(result);

//===============이항 연산자 활용 더하기만 되는 계산기 만들기
//1. "firstInput"첫번째 값을 담는 input  .값 인식 속성 value
//2. "secondInput"두번째 값을 담는 input .값 인식 속성 value
//3. "btn"위 1,2번을 인식하는 결정 버튼 /이벤트 click
//4. "total" 3번 버튼 조건 달성시 1,2 값을 담는 결과 변수 /더하기
//5. "totalp" 4번의 결과변수를 p출력 명령 / innerHTML 속성(HTML에 삽입한다. 공통)
const firstInput=document.querySelector('#val1');
const secondInput=document.querySelector('#val2');
const btn=document.querySelector('#btn');
// let total=Number(firstInput.value)+Number(secondInput.value); 이벤트 안으로 이동
const totalp=document.querySelector('#result');

// console.log(firstInput,secondInput,btn,totalp)
// console.log(total)

btn.addEventListener('click',function(){
    let total=Number(firstInput.value)+Number(secondInput.value); //조건달성시~ 이벤트 안에서 쓸것
    totalp.innerHTML=total; 
    //결정버튼 이벤트 =클릭 실행 (조건 ,결과)
})


//================증감연산자 공부
let x=5;
let y=x++; //x++ 증가연산자(1씩증가) 후위연산자
console.log(x,y); //x는 뒤에 증가연산자를 받아서 6, y는(후위연산자) x먼저받아서 5 
y=x++; 
console.log(x,y); // y=6 x=7
x=++y; 
console.log(x,y); //y=7 x=7
x++; //대입 없이 바로 증감연산 
console.log(x); //8

//==========증감 연산자 문제
let a=10;
let b=20;
let c=30;
let d=40;
console.log(a,b,c,d);
///a,b,c,d의 값은? // 정답:10 20 30 40
a++;    //11 
b--;    //19 
c++;    //31
d--;    //39
console.log(a,b,c,d);
///a,b,c,d의 값은? // 정답: 11 19 31 39
a=++b;  //a=20 .b=20 
b=a++; //b=20 a=21
console.log(a,b,c,d);
///a,b,c,d의 값은? // 정답:21 20 31 39
c=a+b;  //c=41
d=++c;  //d=42 c=42
console.log(a,b,c,d);
///a,b,c,d의 값은? // 정답:21 20 31 39
a=++c+10;   //a=53 c=43
b=--d+1;    //b=42 d=41
///a,b,c,d의 값은? // 정답:53 42 43 41
console.log(a,b,c,d);


//=================복합대입 연산자
let number=10;
// number=number+5;
number+=5;  //기존 number에 5를 더해서 number에 대입해라
console.log(number); //15
// number=number-5;
number-=5;
console.log(number); //10
// number=number*5;
number*=5;
console.log(number); //50
// number=number/5;
number/=5;
console.log(number); //10
// number=number%5;
number%=5;
console.log(number); //0



// 목표: 인풋 교통비,식비,커피, 입력후 버튼을 클릭하면 총 토탈금액이 출력
//1. transportPay 첫번째 값을 담는 input  .값 인식 속성 value
//2. foodPay 두번째 값을 담는 input  .값 인식 속성 value
//3. coffeePay 세번째 값을 담는 input  .값 인식 속성 value
//4. "totalBtn"위 1,2,3번을 인식하는 결정 버튼 /이벤트 click (결정버튼 이벤트 =클릭,실행 (조건 ,결과)
//5. "totalPrice" 4번 버튼 조건 달성시 1,2 값을 담는 결과 변수 /더하기
//6. "todayResult" 5번의 결과변수를 span출력 명령 / innerHTML 속성(HTML에 삽입한다. 공통)

const transportPay=document.querySelector('#money1');
const foodPay=document.querySelector('#money2');
const coffeePay=document.querySelector('#money3');
const totalBtn=document.querySelector('#totalBtn');

const todayResult=document.querySelector('.todayResult span');

// console.log(transportPay,foodPay,coffeePay,totalBtn,todayResult)
// console.log(totalPrice)

totalBtn.addEventListener('click',function(){
    let totalPrice=Number(transportPay.value)+Number(foodPay.value)+Number(coffeePay.value);
    todayResult.innerHTML=totalPrice.toLocaleString('ko-kr'); //세자리 콤마 표시 (총계에만 적용한다)
})


//목표: 입금시 1000원 주는 자바스크립트 은행
//*. bankInput 첫번째 값을 담는 input  .값 인식 속성 value
//*. bankTotal 총잔액 표시하는 total잔액 변수 출력
//*. depositBtn 입금하기 버튼/이벤트 click
//*  depositTotal 2번 조건 값을 담는 결과 변수 
//*  total   총 잔액 데이터 데이터 초기값 0
//*  deposit 1번입금금액에 추가되는 이자 1000

//1. total 총잔액 표시
//2. bankInput 입금액 입력
//3. depositBtn 입금하기 버튼클릭
//4. deposit 입금액을 인식하고 이자가 더해진다
//5. total 총 잔액에 포함된다
//6. bankTotal 총 잔액에 표시된다

let total=0;
const bankInput=document.querySelector('#bank_input');
const depositBtn=document.querySelector('#deposit_btn');
const bankTotal=document.querySelector('#bank_total1');

depositBtn.addEventListener('click',function(){
    let deposit=Number(bankInput.value)+1000;
    total +=deposit;
    bankInput.value=0; //입금후 입금창 금액은 없어짐.
    bankTotal.value=total.toLocaleString('ko-kr');  //innerHTML(속성)
});
