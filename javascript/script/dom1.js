//======================DOM(Document Object Model)변수대입 복습
//변수가 변하지 않는 고정 데이터라면?
//const 변수명 대입연산자 반복되는 대입값; 예) Dom)
//변수가 변할 수 있는 수동 데이터라면?
//let 변수명 대입연산자 반복되는 대입값;
//var 변수명 대입연산자 반복되는 대입값;
//==============변수대입 DOM요소가 태그노드라면? 선언후 배열형태확인 사용
////const 변수명 대입연산자 document.getElementsByTagName('태그');
//==============변수대입 DOM요소가 클래스노드라면?
////const 변수명 대입연산자 document.getElementsByClassName('클래스명');
//======================배열형태 노드라면 직접 사용시 [0]인덱스숫자 이용
//==============변수대입 DOM요소가 아이디노드라면?
////const 변수명 대입연산자 document.getElementById('아이디명');
const headerTag=document.getElementsByTagName('header');
console.log(headerTag); //단순 테스트확ㅇ니시 배열 전체 확인 가능
//애니메이션 및 동적, 디자인 기능 등 직접적용 시 배열 직접 접근(인덱스 활용)
headerTag[0].style='background-color:yellow';
console.log(typeof headerTag); //object (객체)
const logo=document.getElementsByTagName('h1')[0]; 
logo.style='color:red';
const searchDiv=document.getElementsByClassName('search')[0];
searchDiv.style='border-bottom:2px solid black';
const searchInput=document.getElementById('txt');
console.log(searchInput);
searchInput.style='background-color:lime';
const searchBtn=document.getElementById('btn');
console.log(searchBtn);
searchBtn.style='border-radius:20px';

////////querySelctor/////////////////
//querySelctor메서드는 body태그에 작성한 태그 순서상 먼저 시작한 대상을 인식한다. header태그가 두개라면 먼저 선언된 header태그만 인식해서 변수에 대입한다.
const hea=document.querySelector('header');
console.log(hea);
hea.style='background-image:url(https://i.pinimg.com/736x/31/59/ad/3159adcd1ebfb8bf2afc7257d4859cb9.jpg)';
//querySelector는 getElement명령어처럼 class,id,tag선언이 함께 하지 않기 때문에 querySelector의 메서괄호안에서 class,id,tag 를 구분할수 있는 표시를 함께한다. 태그라면 태그이름만, 클래스라면.클래스명, 아이디라면 #아이디명으로 작성해서 구분한다.
const sear=document.querySelector('.search');
console.log(sear);
sear.style='opacity:0.5';

const searTxt=document.querySelector('#txt');
console.log(searTxt);
searTxt.style='color:red';

const gnbLi=document.querySelectorAll('.gnb li')
console.log(gnbLi);
gnbLi[0].style='background-color:lime';
gnbLi[1].style='background-color:white';
gnbLi[2].style='background-color:coral';
gnbLi[3].style='background-color:yellow';

const gnb=document.querySelector('.gnb');
gnb.querySelector('a').style='background-color:black'; // 일회성


//const gnbA=document.querySelectorAll('.gnb a');
//const gnbA=gnb.querySelectorAll('a');

//document.querySelector('.gnb').querySelectorAll('a')위와 동일
const gnbA=document.querySelectorAll('.gnb li')
console.log(gnbA);
// gnbA[0].style='color:red';
gnbA[1].style='color:hotpink';
gnbA[2].style='color:lime';
gnbA[3].style='color:black';