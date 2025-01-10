//250110- 구구단 함수 복습
//1. "danInput" input요소에 사용자가 원하는 구구단 입력후
//2. "danBtn" button요소 클릭 시
//3. "dan99" 2번 조건 달성시 호출할수 있는 구구단 함수 생성(클릭했을때 호출 )
//3-1.(함수 안) 함수 실행 시 마다 위 1번의 입력값을 받기 위해 '매개변수' 생성
//3-2.(함수 안) 매개변수를 이용 구구단 식 제작 2x=2
//3-3.(함수 안) 출력하기위한 "danResult" 변수 생성
//3-4.(함수 안) 위 변수에 대입 후 완성
const danInput=document.querySelector('#dan')
const danBtn=document.querySelector('#danBtn')
const danResult=document.querySelector('.danResult')
console.log(danInput,danBtn,danResult) //error,underined,null
// danBtn.addEventListener('click',function(){dan99(Number(danInput.value));}) //호출
danBtn.addEventListener('click',()=>dan99(Number(danInput.value))) //호출
function dan99(dan){ //  (dan)=let dan 매개변수 생성되었다는뜻
    let total='';
    total=`${dan}x1=${dan*1}<br>`;
    total+=`${dan}x2=${dan*2}<br>`;
    total+=`${dan}x3=${dan*3}<br>`;
    total+=`${dan}x4=${dan*4}<br>`;
    total+=`${dan}x5=${dan*5}<br>`;
    total+=`${dan}x6=${dan*6}<br>`;
    total+=`${dan}x7=${dan*7}<br>`;
    total+=`${dan}x8=${dan*8}<br>`;
    total+=`${dan}x9=${dan*9}`;

    return danResult.innerHTML=total;

    // danResult.innerHTML=`${dan}x1=${dan*1}<br>`; //첫줄은 함수가 재실행될때 이전값을 지우고 재실행하기위해 복합대입을 쓰지않는다.
    // danResult.innerHTML+=`${dan}x2=${dan*2}<br>`;
    // danResult.innerHTML+=`${dan}x3=${dan*3}<br>`;
    // danResult.innerHTML+=`${dan}x4=${dan*4}<br>`; //함수 최종분만 표시되서, 2줄부터 복합대입+=
    // danResult.innerHTML+=`${dan}x5=${dan*5}<br>`; //함수 최종분만 표시되서, 2줄부터 복합대입+=
    // danResult.innerHTML+=`${dan}x6=${dan*6}<br>`; //함수 최종분만 표시되서, 2줄부터 복합대입+=
    // danResult.innerHTML+=`${dan}x7=${dan*7}<br>`; //함수 최종분만 표시되서, 2줄부터 복합대입+=
    // danResult.innerHTML+=`${dan}x8=${dan*8}<br>`; //함수 최종분만 표시되서, 2줄부터 복합대입+=
    // danResult.innerHTML+=`${dan}x9=${dan*9}`; //함수 최종분만 표시되서, 2줄부터 복합대입+=
    // return danResult.innerHTML 
}

//매개변수 없는 화살표 함수
const greet=()=>console.log('hello');
const greet2=()=>{
    let a=10;
    return console.log(a+10);
}
greet();
greet2();

//매개변수 있는 화살표 함수
//일반함수인 경우
function func1(a){
    return a+100;
}
console.log(func1(10));

//화살표 함수인 경우
const func2=(a)=>a+100;
console.log(func2(10));

console.log('====================================================')
//DOM, Node 관계 속성 공부
const nav_a1=document.querySelector('nav a'); //첫번째
const nav_a2=document.querySelectorAll('nav a'); //모든 a
const header=document.querySelector('header');

console.log('========================next,previous 관계속성 공부')
nav_a2[1];
console.log(nav_a2[1].nextElementSibling.nextElementSibling); //관계속성 연달아 작성가능
console.log(nav_a2[1].previousElementSibling);






console.log(nav_a1,nav_a2);
console.log(nav_a1.parentElement); //DOM요소 nav
console.log(nav_a2[0].parentElement); //DOM요소 nav
console.log(nav_a2[1].parentNode); //요소 노드 nav(공백,텍스트 포함 검사)
// nav_a1.parentElement.style='background-color:aqua;'
// nav_a2[2].parentNode.style='padding:20px';
//style을 같은 DOM요소에 두번 이상 적용하고싶은 경우 CSS속성 명을 자바스크립트 키워드 방식으로 Came1표기법으로 작성해야한다.
nav_a1.parentElement.style.backgroundColor='aqua'; 
nav_a1.parentElement.style.padding='20px'; 
nav_a1.addEventListener('mouseover',()=>nav_a1.parentElement.style.borderBottom='2px solid #000');
nav_a2[3].addEventListener('mouseover',()=>nav_a2[3].parentNode.style.backgroundColor='yellow');
nav_a2[3].addEventListener('mouseout',()=>nav_a2[3].parentNode.style.background='none');
//자식 노드 childNodes, children
console.log(nav_a1.childNodes); //[공백]
console.log(nav_a1.children); //[]
console.log(header.childNodes); //[text, h1, text, nav, text] 공백포함
console.log(header.children[0]); //[h1, nav] 요소만 인식. 
console.log(header.children[0].innerHTML); //<a href="#">logo</a>
console.log(header.children[0].innerText); //logo
// header에 마우스를 올렸을때  자식 h1  "logo" ->"로고" 글자변경하기
header.addEventListener('mouseover',()=>{
    // console.log(header.children[0].innerText)
    header.children[0].children[0].innerHTML='<em>로고</em>';
    // header.children[0].children[0].innerText='로고'; // html.text 차이
});

console.log('=============childElementCount 자식노드개수');
console.log(header.childElementCount); //2 사용 예)장바구니 전체 갯수..

//================마켓컬리 쇼핑몰 장바구니 개수
//1. "cart_num"장바구니 초기값 0
//2. "cart_item"사용자 장바구니에 물건 2개를 담았다. 
//3. "cart_num_all"2번의 물건 개수에 따라 장바구니 페이지에 전체 상품 개수 출력
let cart_num=0; //초기값 0
const cart_item=document.querySelector('.cart_contents');
const cart_num_all=document.querySelector('.all_cart_num');
cart_num_all.innerText=cart_num; //장바구니에 초기값 0을 담았다.
//사용자가 물건 2개를 담았다(상황2)

cart_num=cart_item.childElementCount;  //초기값0에 cart_contents 자식요소 갯수 대입하기.
console.log(cart_num);
cart_num_all.innerText=cart_num; //현재 진행기준 장바구니 개수 대입


console.log('================================')
console.log(header.firstChild); //공백
console.log(header.firstElementChild); //h1
console.log(header.lastChild); //공백
console.log(header.lastElementChild); //nav


