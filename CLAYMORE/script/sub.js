//상품 썸네일 js
//1. 작은 썸네일 이미지에 마우스를 올렸다
//2. 위1번 대상에만 테두리가 적용된다(다른 모든 요소에 테두리가 제거) (속성리스트)
//3. 위1번 대상이 우측 큰 이미지에 나타났다
//DOM Node:작은 썸네일 이미지, 우측큰 이미지
//속성,메서드,이벤트:마우스를 올렸다,테두리가 작용된다. 테두리 제거,나타났다.

const thumnail= document.querySelectorAll('.thumbnail_poto a img');
const bigImage= document.querySelector('.product-poto .big img');


console.log(thumnail[0].parentElement);

//두번째 썸네일(thum2.jpg)에 마우스 올렸을때 큰이미지 경로 (big2.jpg)로 변경

// thumnail[1].addEventListener('mouseover',()=>{})
    function thum_remove(){ //반복되는 리무브 function을 만들어 이벤트에 불러낸다.
        thumnail[0].parentElement.classList.remove('active');
        thumnail[1].parentElement.classList.remove('active');
        thumnail[2].parentElement.classList.remove('active');
        thumnail[3].parentElement.classList.remove('active');
        thumnail[4].parentElement.classList.remove('active');
        thumnail[5].parentElement.classList.remove('active');
        thumnail[6].parentElement.classList.remove('active');
    }

    function bigSrc(num){
        return bigImage.src=`./images/big-product_00${num}.jpg`  //return 재사용되는 함수
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
thumnail[5].addEventListener('mouseover',function(){
    bigSrc(6);
    thum_remove();
    thumnail[5].parentElement.classList='active';
})
thumnail[6].addEventListener('mouseover',function(){
    bigSrc(7);
    thum_remove();
    thumnail[6].parentElement.classList='active';
})




//====주문금액+주문수량 js
//초기값: 주문수량(0) 주문금액 (0원) 수량1개당 39,900원
let price=170050; //주문금액
let number=0; //주문수량
const product_num=document.querySelector('#product_num');//수량표시 DOM
const plusBtn=document.querySelector('#plus');//수량증가버튼DOM
const minusBtn=document.querySelector('#minus');//수량감소 버튼 DOM
const orderPrice=document.querySelector('.sum_price');//주문금액 담는그릇
const finaPrice=document.querySelector('.total_price');//주문금액 담는그릇

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
    finaPrice.innerText=totalPrice.toLocaleString('ko-kr');
})

//4. 수량1 증가(최종 수량 2)
//4. 수량에 따라 주문금액 증가 39900*2
//6 ....반복

//1. -버튼(마이너스) 클릭시 
minusBtn.addEventListener('click',()=>{
    number--; //2. 수량 1감소
    if (number<0){
        number = 0;
    }
    product_num.value=number; //
    totalPrice=price*number; //3. 수량에 따라 주문금액 감소 39900*수량
    orderPrice.innerText=totalPrice.toLocaleString('ko-kr');
    finaPrice.innerText=totalPrice.toLocaleString('ko-kr');
})

const swipeItem = new Swiper('.swiper', {
    slidesPerView: 1,       // 한 화면에 1개 표시
    slidesPerGroup: 1,      // 한 번에 1개씩 이동
    loop: true,             // 무한 반복
    speed: 600,             // 전환 속도 (0.6초)
    navigation: {           // 네비게이션 버튼 활성화
        nextEl: ".next_btn",
        prevEl: ".prev_btn",
    },
    autoplay: {             // 자동 이동 (필요 시 사용)
        delay: 3000,       // 3초마다 이동
        disableOnInteraction: false
    },
});


$('#cart_btn').click(function(){
    $("#cart_btn").css({"background-color":"#000","color":"#fff"});
    $("#buy_btn").css({"background-color":"#fff","color":"#000"});
    alert("준비중입니다.");
});

$("#buy_btn").click(function(){
    $("#buy_btn").css({"background-color":"#000","color":"#fff"});
    $("#cart_btn").css({"background-color":"#fff","color":"#000"});
});


$("li").click(function(){
    $("li").removeClass("active"); 
    $(this).addClass("active"); 
});


document.querySelectorAll('a').forEach(link => {
    link.addEventListener("click", function(event) {
        const href = this.getAttribute("href"); // href 속성 가져오기
        
        if (!href || href === "#") {
            event.preventDefault(); // 빈 링크일 경우 기본 동작(상단 이동) 방지
        // } else {
        //     event.preventDefault(); // 기본 동작 방지 (새 창에서 열리도록 설정)
        //     window.open(href, '_blank'); // 새 창에서 열기
        }
    });
});

const topButton = document.getElementById("topBtn");

// 스크롤 이벤트 리스너 추가
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) { // 300px 이상 스크롤 시 버튼 보이기
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }
});

// 버튼 클릭 시 부드럽게 위로 이동
topButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
