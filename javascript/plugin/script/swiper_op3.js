// const newSlide= new Swiper('.new_slide_wrap'); 기본형태
const newSlide= new Swiper('.new_slide_wrap',{
    //속성:값,
    autoplay:{
        delay:2000, //다음슬라이드 전환까지 대기시간
        disableOnInteraction:false, //사용자 상호작용 상관없이 계속 진행.
    },
    loop:true, //무한반복설정
    mousewheel:true, //웹사이트 수직페이지 전환시에만사용(100%vh 일경우)
    slidesPerView:3, //한번에 표시되는 슬라이드 개수
    //(위) 표시 슬라이드 개수보다 실제 슬라이드 개수가 많아야함!!
    spaceBetween:20, //간격 설정
    // slidesPerGroup:3,  //3페이지 한번에 넘긴다
    centeredSlides:true, //중심에서 첫페이지 시작 (필수)
    
});