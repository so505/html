//const 변수명=new Swiper('사용자정의클래스명',{속성:값, 속성:값;})
//const 변수명=new Swiper('사용자정의클래스명',{속성:{속성:값, 속성:값},})
const bestSwiper = new Swiper('.best_swiper',{
    //속성:'값',
    //속성:값,
    effect:'fade',   //옆으로 넘어가지않고 제자리에서 바뀜. 큰배너에 적합
    autoplay:{ //자동 슬라이드
        delay:2000,
    },
});
