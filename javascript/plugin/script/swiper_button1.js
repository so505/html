const eventSwiper= new Swiper('.event-swiper',{
    autoplay:{delay:2500},
    loop:true,
    // (기본) 페이지번호
    pagination:{
        el:'.event-swiper + .swiper-pagination',
        type:'bullets',
        clickable:true,
        dynamicBullets:true, //활성화크기 변경
    },
    navigation:{ //(기본)내비게이션
        nextEl:'.event-swiper + .btn .next',
        prevEl:'.event-swiper + .btn .prev',
    },
});