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


