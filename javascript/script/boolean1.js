//논리데이터 확인 true or false
//true (1)
//false(2)
//논리데이터(boolean)을 다른 숫자데이터와 연결하면 1,0으로 처리되서 계산된다.
console.log(typeof true); //boolean
console.log(typeof false); //boolean
console.log(true+10); //11
console.log(typeof(false+5)); //number
//==========불린함수활용 falsy or truthy 값 구분
console.log(Boolean(false)); //false
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(0)); //false
console.log(Boolean('')); //false =======여기까지 모두 falsy값 
console.log(Boolean('js')); //true
console.log(Boolean(1234)); //true
console.log(Boolean(-1234)); //true
console.log(Boolean({})); //true
console.log(Boolean([])); //true ========여기까지 모두 truthy값
//============비교연산자
//1. 일치(동등)연산자 : 좌우 값이 같은가? 같으면 참, 다르면 거짓.
console.log('4'==4);  //true
console.log('4'===4);  //false (엄격한 비교를 사용하는것이 좋다)
console.log('4'==='4'); //true
//2. 부등(불일치)연산자: 좌우 값이 다른가? 다르면 참, 같으면 거짓
console.log(10 !="10"); //false
console.log(10 !=="10"); //true
console.log(10 !==10); //false
//3. 대소 비교 연산자 : 작다, 크다, 크거나 같다,작거나 같다.
let x=5;
let y=7;
console.log(x<y); //true
console.log(x>y); //false
console.log(x>=y); //false
console.log(x<=y); //true
console.log(x===y); //false
console.log(5===5); //true
console.log('=====================================================');
/* 논리연산자 AND(&&) OR(||) NOT(!)  */ 
function print(value){ //양쪽 피연산자가 모두 참 일 때 결과는 참
    const message=value &&'web';
    return console.log(message);
}
print(1); //web
print(0);//0
print([]);

function bool(da){  // NOT(!) 반전
    const message=! da;
    return console.log(message);
}
bool({}); //false 참->거짓
bool(1); //false 참->거짓
bool(''); //true 거짓->참
bool(0); //true 거짓->참

console.log('==========================================')
//조건? 조건이 참일때 실행 : 조건값이 거짓일때 실행
let a=5;
let b=a+10;
let total=a>b?'a는 b보다크다':'a는 b보다 작다'; //a는 b보다 작다 ()
console.log(total); 

//나이에 따라 성인/미성년자를 구분하는 js
// let age=prompt('몇살인가요?');
// //사용자가 대답한 값에 따라서 '성인' '미성년자' 콘솔 출력 18세 이상 기준 
// total=age>= 18 ? '성인':'미성년자';
// console.log(total);

//=====================================
//1. "textarea"사용자 리뷰 작성.
const textarea=document.querySelector('#review');
const reviewBtn=document.querySelector('#reviewBtn');
let result='';

//2. "reviewBtn"리뷰등록하기 버튼 클릭
reviewBtn.addEventListener('click',()=>{
    result=textarea.value.length>=10?'등록완료':'10자 이상 작성하셔야 등록 됩니다';
    alert(result);
})
//3. "result"(리뷰 100자 이상인 경우)'등록완료됐습니다' 팝업출력
//4. (리뷰 100자 미만인 경우)'100자 이상 작성하셔야 등록 됩니다' 팝업출력

//==============================================================
//0. 초기값 1개당 12500원, 재고 10개 제한
let price=13500; //가격
let number=1; //수량
let stock=10; //재고
let result_num; //삼항조건식 결과 담는 변수

const num=document.querySelector('#num');
const minusBtn=document.querySelector('#minus');
const plusBtn=document.querySelector('#plus');
const priceNode=document.querySelector('.price span')

console.log()

num.value= number;
priceNode.innerText=price;
// inner Text 같은속성 textContent (속도 빠름)

plusBtn.addEventListener('click',()=>{
    //조건결과를 담는 변수= 조건식 ? 조건이 참일때 결과 : 조건이 거짓일때결과;
    result_num=number>=10? alert('최대구매수량입니다'):number++; //10개이상이면 메세지출력:아니면 갯수플러스
    num.value=number;
    priceNode. innerText=(price*number) .toLocaleString('ko-kr');
//1. 사용자가 +클릭시 수량이 1씩 증가한다
//2. 증가 수량에 따라 가격이 증가된다
//3. 구입수량이 10개 이상이면 + 버튼 클릭 시 '최대구매수량입니다' 출력
})


minusBtn.addEventListener('click',()=>{
    //조건결과를 담는 변수= 조건식 ? 조건이 참일때 결과 : 조건이 거짓일때결과;
    result_num=number<=1? alert('최소구매수량입니다'):number--; //1개미만이면 메세지출력:아니면 갯수차감
    num.value=number;
    priceNode. innerText=(price*number) .toLocaleString('ko-kr');
//4. 구입수량이 1개 미만이면 - 버튼 클릭 시 '최소구매수량입니다' 출력
})

console.log('=============================if 조건문=============')
let box1=30;
let box2=20;

//if(조건식){조건결과가 참일때 실행결과} else{조건결과가 거짓일때 실행}
if(box1 === box2){console.log('참')}

//상황1.관리자만 접속 가능한 페이지
//관리자 ID : admin.
const user_id=document.querySelector('#user_id')
const loginBtn=document.querySelector('#loginBtn')

loginBtn.addEventListener('click',()=>{
    console.log(user_id.value==='admin') 
    if(user_id.value==='admin'){
        alert('관리자님 어서오세요');
    }
});
//============================================
//나머지 연산자 %
console.log(2%4);
console.log(4%2);
//자바스크립트 나머지 연산자 0,1 홀,짝 구분 목적
//true+5=6  
//false+5=5
//falsy 거짓으로 인식하는 숫자 값 0
//truthy 참으로 인식하는 숫자 값은 0이 아닌 모든 값(대표 1)
//심리테스트 결과 함수

const test_num=document.querySelector('#test_num');
const testBtn=document.querySelector('#testBtn');
const testResult=document.querySelector('.testResult');


function testFunc(data1,data2){
    let txt=`당신이 선택한 숫자 ${data1}는 ${data2}수입니다!`;
    txt +=`${data2}수를 좋아하는 사람은 다정하고 따뜻한 성격을 가지고 있는 사람입니다.`;
    return txt;
}

testBtn.addEventListener('click',()=>{
//홀수
if(test_num.value%2==1){ 
    testResult.innerHTML=testFunc(test_num.value,'홀');
}else{//위에 if조건이 거짓일 경우 자동실행
        testResult.innerHTML=testFunc(test_num.value,'짝');
}});

// //짝수
// if(test_num.value%2==0){ testFunc
//     testResult.innerHTML=testFunc(test_num.value,'짝');

