//타이머함수
//일정시간마다 반복하는 setInterval
//setInterval(실행함수,실행시간)
//const 타이머변수=setInterval(실행함수,실행시간) <<이 방식이 편함.
let num=5;
const timerDiv=document.querySelector('.timer');
const timer1=setInterval(function(){
    // console.log('timer'+num)
    timerDiv.textContent = num
    num--;
    // if(num==0) window.location.href='https://google.com';  //상대경로도 가능
    
},1000);

console.log('===============================')

//애니메이션 진행시간에 맞춰 1초씩 증가하는 타이머
const boxTimer=document.querySelector('.box_timer');
let box_num=0;
let timer2=setInterval(timerFunc, 1000)
function timerFunc(){
    box_num++;
    boxTimer.textContent=`진행시간 :${box_num} 초`
}

// stop버튼 클릭 시 진행시간, 애니메이션이 정지('paused')
const boxAni=document.querySelector('.box');
const stopBtn=document.querySelector('#stop');
// replatBtn 버튼 클릭 시 진행시간, 애니메이션이 실행('running')
const replayBtn=document.querySelector('#replay')

stopBtn.addEventListener('click',()=>{
    clearInterval(timer2)
    // boxAni.style.animation='none';
    boxAni.style.animationPlayState='paused';  //animation-play-state 일시정지
})

replayBtn.addEventListener('click',()=>{
    boxAni.style.animationPlayState='running'; //animation-play-running 재생
    timer2=setInterval(timerFunc,1000);
})


//한 글자씩 작성하는 자바스크립트 
const text='portfolio 2025';
let i=0; //글자 인덱스 인식변수
const textSpan=document.querySelector('.container .text');
let container_timer=setInterval(writer, 200)

function writer(){
    if(i<=text.length){
        textSpan.innerHTML+=text.charAt(i);
        i++;
        // console.log(i,text.charAt(i));
    }
}

console.log('===========연습=================')
const text2='한글자씩 작성하는 자바스크립트연습';
let j=0; //글자 인덱스 인식변수
const text3=document.querySelector('.container2 .text');
let container_timer2=setInterval(writer2,500)

function writer2(){
    if(j<=text2.length){
        if(j==9) text3.innerHTML += '<br>'
        text3.innerHTML+=text2.charAt(j);
        j++;
    }
}
