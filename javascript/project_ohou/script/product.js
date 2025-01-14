//상품 썸네일 js
//1. 작은 썸네일 이미지에 마우스를 올렸다
//2. 위1번 대상에만 테두리가 적용된다(다른 모든 요소에 테두리가 제거) (속성리스트)
//3. 위1번 대상이 우측 큰 이미지에 나타났다
//DOM Node:작은 썸네일 이미지, 우측큰 이미지
//속성,메서드,이벤트:마우스를 올렸다,테두리가 작용된다. 테두리 제거,나타났다.

const thumnail= document.querySelectorAll('.thumnail a img');
const bigImage= document.querySelector('.photo .big img');


console.log(thumnail[0].parentElement);

//두번째 썸네일(thum2.jpg)에 마우스 올렸을때 큰이미지 경로 (big2.jpg)로 변경

// thumnail[1].addEventListener('mouseover',()=>{})
    function thum_remove(){ //반복되는 리무브 function을 만들어 이벤트에 불러낸다.
        thumnail[0].parentElement.classList.remove('active');
        thumnail[1].parentElement.classList.remove('active');
        thumnail[2].parentElement.classList.remove('active');
        thumnail[3].parentElement.classList.remove('active');
        thumnail[4].parentElement.classList.remove('active');
    }

    function bigSrc(num){
        return bigImage.src=`./images/big${num}.jpg`  //return 재사용되는 함수
    }

thumnail[0].addEventListener('mouseover',function(){
    bigSrc(1);
    thum_remove();
    thumnail[0].parentElement.classList='active';
})
thumnail[1].addEventListener('mouseover',function(){
    bigSrc(2);
    thum_remove();
    thumnail[1].parentElement.classList='active';
})

thumnail[2].addEventListener('mouseover',function(){
    bigSrc(3);
    thum_remove();
    thumnail[2].parentElement.classList='active';
})
thumnail[3].addEventListener('mouseover',function(){
    bigSrc(4);
    thum_remove();
    thumnail[3].parentElement.classList='active';
})
thumnail[4].addEventListener('mouseover',function(){
    bigSrc(5);
    thum_remove();
    thumnail[4].parentElement.classList='active';
})

// ================상품 배송 도착정보 js
//0. 변수 준비
const schedule=document.querySelector('.ship_schedule'); //도착예정 변수만들기
const scheduleOpen=document.querySelector('.schedule_open'); //도착정보 변수만들기

//1.(시작 전) 도착예정 정보 숨기기(초기세팅)
scheduleOpen.classList.add('hide');
//2. 도착예정 링크 클릭
schedule.addEventListener('click',(e)=>{
    console.log(e);
    e.preventDefault();
    /* js 이벤트 대상으로 a태그 사용 시 href="#" 속성으로 인해 클릭시 스크롤이 위로 자동으로 올라가는 문제점이 발생한다.*/
    /*(위)해결방법 :DOM객체 클 시 발생하는 속성(a태그의 경우 href)는 이벤트 내 매개변수로 저장되는 특징이 있는데 이를 이용해 이벤트를 막아주는 메서드를 활용하면 위 문제를 해결 할수 있다.*/  
    //1.매개변수 e생성->e.preventDefault();
    scheduleOpen.classList.toggle('hide'); //toggle메서드를 활용 교차 클래스 생성
})
//3. 도착예정정보 보이기 (toggle메서드)
//4. 도착예정 링크 클릭
//5. 도착예정정보 숨기기

//====주문금액+주문수량 js
//초기값: 주문수량(0) 주문금액 (0원) 수량1개당 39,900원
let price=39900; //주문금액
let number=0; //주문수량
const product_num=document.querySelector('#product_num');//수량표시 DOM
const plusBtn=document.querySelector('#plus');//수량증가버튼DOM
const minusBtn=document.querySelector('#minus');//수량감소 버튼 DOM
const orderPrice=document.querySelector('.order_price .price');//주문금액 담는그릇
totalPrice=0; //최종 가격 저장 변수

console.log(orderPrice)

product_num.value=number //input이므로 속성value써야함.

//1. +버튼 클릭시
plusBtn.addEventListener('click',()=>{
    //2. 수량1 증가(최종 수량 1)
    number++; //1증가하는 증감연산자
    product_num.value=number;
    //3. 수량에 따라 주문금액 증가 39900*1
    // orderPrice.innerText=price*number;  주문금액*주문수량
    totalPrice=price*number;
    orderPrice.innerText=totalPrice.toLocaleString('ko-kr');
})

//4. 수량1 증가(최종 수량 2)
//4. 수량에 따라 주문금액 증가 39900*2
//6 ....반복

//1. -버튼(마이너스) 클릭시 
minusBtn.addEventListener('click',()=>{
    number--; //2. 수량 1감소
    product_num.value=number; //
    totalPrice=price*number; //3. 수량에 따라 주문금액 감소 39900*수량
    orderPrice.innerText=totalPrice.toLocaleString('ko-kr');
})

// ============ 장바구니 팝업 js 
const cartPopup=document.querySelector('.cart_open_bg')
const cartBtn=document.querySelector('#cart_btn') //쇼핑페이지에 장바구니
const shoppingBtn=document.querySelector('.cart_open_bg .link a:nth-child(1)')

console.log(shoppingBtn)
//1. "cartPopup"초기값: 팝업 숨기기
cartPopup.style.display='none';
//2. "cartBtn"장바구니 클릭 시

cartBtn.addEventListener('click',()=>{
    //3. 팝업 보이기
    cartPopup.style.display='block'; // css에서 적용한 속성 (블럭,인라인,플렉스 등..)
    document.body.style.overflow='hidden'; //장바구니 팝업 스크롤 고정
})


shoppingBtn.addEventListener('click',()=>{ //4. "shoppingBtn"팝업 내 '쇼핑 계속하기'클릭 시
    //5. 팝업 숨기기
    cartPopup.style.display='none';
    document.body.style.overflow='auto'; //쇼핑계속하기 클릭하면 팝업스크롤 고정한거 해제
})




//**** classList와 style속성 구분해서 적용하기
// 객체.classList 사용
// *css 속성 2~3개 이상 사용할 경우
// *roggle, remove 교체, 삭제 등으로 다양한 경우에 사용할 경우

// 객체. style 사용 
//* css 속성 1~3개 적개 사용할 경우
//* 객체 css를 단순히 적용만 할 경우

