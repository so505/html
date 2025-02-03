// const newSlide= new Swiper('.new_slide_wrap'); 기본형태
const newSlide= new Swiper('.new_slide_wrap',{
    //속성:값,
    mousewheel:true, //웹사이트 수직페이지 전환시에만사용(100%vh 일경우)
    //(위) 표시 슬라이드 개수보다 실제 슬라이드 개수가 많아야함!!
    spaceBetween:20, //간격 설정
    direction:'vertical',
    
});
const snsSlide= new Swiper('.sns_portfolio',{
    autoplay:{delay:1000,speed:500,}
    
    
});