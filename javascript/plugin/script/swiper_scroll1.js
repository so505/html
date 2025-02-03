const activeScrollbar=document.querySelector('.active-scrollbar')
console.log('activeScrollbar')

const eventSwiper= new Swiper('.event-swiper',{
    autoplay:{delay:2500},
    loop:true,
    on:{
        autoplayTimeLeft(type,time,progress){
            // console.log(type,time,progress)
            if(progress===1){
                activeScrollbar.style.width='0%'  //컬로도 가능(백그라운드컬러)
                activeScrollbar.style.transition='none' // (아래 설정한 딜레이 2.5초 없애기)
            }else{
                activeScrollbar.style.width='100%'
                activeScrollbar.style.transition='width 2.5s linear'
            }
        }
    },
});
