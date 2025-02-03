// 스크롤 감지하는 이벤트 scroll,wheel(마우스휠 동작)
// 스크롤 이벤트 적용 객체는 가능한 window사용한다
window.addEventListener('scroll',function(){
    console.log('scroll')
})
const circle=document.querySelector('.circle')
window.addEventListener('mousemove',function(e){
    // console.log(e);
    circle.style.left=`${e.clientX}px`
    circle.style.top=`${e.clientY}px`
});