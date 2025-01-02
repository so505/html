//---------------변수 복습 -----------------
//반복되는 복잡한 실행식을 함수에 넣어두고 호출해서 사용한다로 암기--
var a=2025; //숫자데이터
var b="자바스크립트"; //문자데이터
var c; //undefined 값이 정의되지 않음(대입값이 존재안함)
console.log(a,b,c);
console.log(a+1);//숫자를 가진 변수+숫자데이터
console.log(b+' 공부');//문자를 가진 변수+문자데이터=문자데이터
console.log(a+c)//숫자를 가진 변수+정의되지 않은 변수 Not a Number(NaN)
console.log(a+b);//숫자변수+문자변수 = 문자데이터 (콘솔 검정색=문자)
c=1; //절차순서때문에 바로 반영되지않는다
console.log(a+c);//숫자변수+숫자변수=숫자
console.log(a-c);//숫자변수-숫자변수=숫자
console.log('---------------------------------------------------')
//함수 생성 문법 function 함수명(){실행식;}
function abcPlus(){
    console.log(a+b+c);
}
//메서드() 공부
/* var d= window.prompt('1+1은?');  // 테스트용도 (질문답변창)
console.log(d); */
//prompt와 function 함수 활용

//1.변수 생성
//2.함수 생성 ageFunc
//3. 버튼 클릭 시 2번 함수를 호출 onclick="ageFunc()"

var age;// undefinde나이를 정의 하지 않은 상태로 시작
function ageFunc(){
    age=window.prompt('올해 몇살이세요?');
    console.log(typeof age); //버튼을 눌러야 확인됨.(fromtp의 답은 무조건 문자로 나옴)
    console.log(age+'살입니다.');
}
var mbti;
var blood;
function mbtiBloodFunc(){
    mbti=window.prompt('당신의 mbti는?');
    blood=window.prompt('당신의 혈액형은?');
    console.log('혈액형은',blood,'형이고 mbti는',mbti,'입니다');
    console.log('mbti데이터타입은?',typeof mbti); //찾아보기 쉽게 문자를 표시할수있다
    console.log(typeof blood);
    console.log(typeof (mbti, blood)); //두개 같이 표기할때

}
//변수 선언 var,let,const
var a; // 상단에 a가 존재하는 상태로 중복 a를 만듬
console.log(a);// 중복문제를 발견 못함
// let b;       // let 선언 중복 오류 확인가능
console.log(b);
//상수는 선언과 동시에 변하지 않는 값을 대입해야 한다. 
const e=2024;
console.log(e);
console.log('----------------------------------------------');
console.log(typeof a); //a변수의 데이터타입 확인 number(숫자)
console.log(typeof b); //b변수의 데이터타입 확인 string(문자)
console.log(typeof(c)); //c변수의 데이터타입 확인
console.log(typeof(a+b)); //a와 b변수를 더한 결과 데이터타입은? 숫자+문자=문자
console.log(typeof(a+c)); //a와 c변수를 더한 결과 데이터타입은? 숫자+숫자=숫자
console.log('-----------특수데이터연습-------------------------------')
let f;
let g;
console.log(typeof(f,g)); //undefined
f='';
console.log(typeof f); //string
f='아이디를 입력하세요';
console.log(typeof f);
f=null; //f 변수의 값을 비운다.
//문자데이터를 초기화하는 경우는 null보다 ''문자 데이터를 많이 활용한다.
console.log(typeof f); //object (객체만 남긴다)
g=100;  // 숫자 ,콤마쓰지않기
console.log(typeof g); //number
g= null; // 숫자데이터 특징이 사라지고 obfect만 남는다.
console.log(typeof g); //abject
g= 0; // 숫자데이터는 유지한 상태로 0 값으로 초기화 한다.
console.log(typeof g); //number
console.log('---------------------템플릿문자열------------------')
let coffee=1500;
let lunch=6000;
let total=coffee+lunch;
//오늘 총 지출액은 ? 원입니다.
console.log(`오늘 총 지출액은${total}원입니다.`);
//2단 구구단 출력하기 ex)2X1=2
let dan99;
function dan(){
    dan99=window.prompt('몇단이 궁금해요?');
    console.log(`${dan99}x1=${dan99*1}`);
    console.log(`${dan99}x2=${dan99*2}`);
    console.log(`${dan99}x3=${dan99*3}`);
    console.log(`${dan99}x4=${dan99*4}`);
    console.log(`${dan99}x5=${dan99*5}`);
    console.log(`${dan99}x6=${dan99*6}`);
    console.log(`${dan99}x7=${dan99*7}`);
    console.log(`${dan99}x8=${dan99*8}`);
    console.log(`${dan99}x9=${dan99*9}`);
}


