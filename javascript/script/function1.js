//================함수스코프, 지역변수와 전역변수
//함수 외부(전역스코프 위치)
let b=20;
let c=30;
let a=0;
//함수 내부
//function 함수명(매개변수){반복 알고리즘;}
function test(){
    //함수 내부(지역스코프 위치)
    a=10;
    console.log(a+b); //30
}
//선언한 함수를 사용하고싶다면 함수 외부에서 함수를 호출해야한다.!
//호출방법 : 함수명()
console.log(a+b);// a선언한.. 함수호출을 했으므로 지역스코프를 적용했다.
test(); //전역 스코프에서 함수결과를 보여줄 수있도록 함수호출 (호출순서 중요..순서에 따라 결과 다름)


//================함수스코프 연습2
//최종 결과 값 순서가 6,16으로 출력되도록 함수스코프와 호출을 이용한 문제 풀기
let x =1;
let y;

function func1(){
    y=5;
    console.log(x+y);
}
function func2(){
    func1();//함수2 안에 함수1 호출식이 존재한다면 함수2 호출할때 함수1이 할께 출력되는 경우를 의미한다.  func1();를 func2()밖에서 먼저 호출해도 된다. 호출은 순서상관없이 함수를 불러온다. 호출먼저 작성해놓고 함수를 뒤에 작성하는 경우가 많다.
    let z=10;
    console.log(x+y+z);
}
func2(); //호출

//1.변수 생성(버튼)
const btn1=document.getElementById('btn1');
console.log(btn1);
//2. 변수 이벤트 생성
// 이벤트대상. addEventListener('이벤트종류',이벤트 만족 시 실행함수);
//이벤트 대상==이벤트종류를 적용하고싶은 대상
//이벤트종류==>태그의 인라인script로 적용시 on을 붙이고 스크립트에서 바로 작성시 on없이 바로 이벤트만 작성한다.
btn1.addEventListener('click',function(){
    alert('hello');
})
// =======목표:버튼 클릭시 1+1에 대한 답을 입력창 제공후 입력답 띄우기  ====->
// 1. 버튼2 준비 -->
const btn2=document.querySelector('#btn2');
console.log(btn2);
// 2. 버튼2 클릭 시-->
btn2.addEventListener('click',function(){
    // 3. 1+1답을 입력받을 수있는 질문창 제공후 답 받기
    let answer=prompt('1+1에 대한 답을 쓰세요')
    // 4. 위3에서 받은 값을 팝업창으로 다시 띄우기
    alert(answer);
})
//==========목표: +버튼을 클릭할때마다 input의 value가 1씩 증가하기and 1씩감소하기=======
//1. 제어노드 변수 생성하기 
const num=document.querySelector('#num');
const numPlus=document.querySelector('#numPlus');
const numMinus=document.querySelector('#numMinus');
console.log(num,numPlus,numMinus);
//2. 위 1에서 생성한 변수 중 이벤트대상에 해당되는 것부터 작성하기
numPlus.addEventListener('click',function(){
    //3. 변경대상의 객체, 속성을 잘 구분하여 문법에 맞게 작성하기
    //4. 기존 수량의 값에 1을 더해서(대입값) 수량 칸(왼쪽)에 대입하기
        num.value=Number(num.value)+1 //num.value를 숫자로 변환해서 더해라.!
        console.log(typeof(num.value)); //데이터 타입확인 메서드
})
numMinus.addEventListener('click',function(){
    num.value=num.value-1; //마이너스는 문자에 -를 쓰지않기때문에 숫자로 인식함
})

//=======목표1 : 위 input 2개 무시하고 prompt이용 월급, 보너스를 받고 총수입계산하기 버튼을 클릭하면 Prompt에 입력한 월급+보너스 결과 출력하기============
// //1. 월급 입력받기 prompt
// const price1=prompt('월급 입력');
// //2. 보너스 입력받기 prompt
// const price2=prompt('보너스 입력');
// //3. 계산 버튼 클릭 시
// const total=document.querySelector('#total');
// total.addEventListener('click',function(){
//     //4. 월급+보너스 더하기 +
//     const total_price= Number(price1)+Number(price2);
//     //5. 더한 결과 출력 consle 
//     console.log(total_price);
// })


//목표2 :  input 2개 ,월급, 보너스를 입력받고 총수입계산하기 버튼을 클릭하면 월급+보너스 결과 출력하기
//1. 월급 입력받기 prompt
const price1=document.querySelector('#price1');
//2. 보너스 입력받기 prompt
const price2=document.querySelector('#price2');
//3. 계산 버튼 클릭 시
const total=document.querySelector('#total');
total.addEventListener('click',function(){
    //4. 월급+보너스 더하기 +
    console.log(price1);
    console.log(price1.value);
    console.log(typeof(price1));
    console.log(typeof(price1.value));
    const total_price=Number(price1.value)+Number(price2.value);
    //5. 더한 결과 출력 consle 
    console.log(total_price);
})


