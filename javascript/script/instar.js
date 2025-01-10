//인스타그램 아이콘 클릭 시 활성화 이미지로 변경하기
//off--> on
//like 이미지 클릭 시 off-->on 변경 결과
// const like= document.querySelector('.like img');
// console.log(typeof like);
// console.log(like .src); // src속성  객체.속성
//insta.js 위치에서 like_on.png 연결 시 프로젝트 최상위 폴더 기준 연결
// like.src='./images/like_on.png'; //하트 on
//insta.css 위치에서 like_on.png 상대경로연결
// ../imges/like_on.png

//호버는 백그라운드이미지
//mouseover, mouseout 마우스 올렸을때, 나갔을때 이벤트
//off 이미지에 마우스를 올리면 on 변경
//on 이미지에서 마우스를 나가면 off 변경
const likeIcon=document.querySelector('.like img');
const commenetsIcon=document.querySelector('.commenets img');
const paperIcon=document.querySelector('.paper img');

console.log(likeIcon,commenetsIcon,paperIcon)

function iconsrc(target,name,status){
    // return likeIcon.src=`./images/like_${status}.png`;
    return target.src=`./images/${name}_${status}.png`;
}

likeIcon.addEventListener('mouseout',function(){
    iconsrc(likeIcon,'like','on');
})
likeIcon.addEventListener('mouseover',function(){
    iconsrc(likeIcon,'like','off');
})

commenetsIcon.addEventListener('mouseover',function(){
    iconsrc(commenetsIcon,'comment','on');
})
commenetsIcon.addEventListener('mouseout',function(){
    iconsrc(commenetsIcon,'comment','off');
})

paperIcon.addEventListener('mouseover',function(){
    iconsrc(paperIcon,'paper','on');
})
paperIcon.addEventListener('mouseout',function(){
    iconsrc(paperIcon,'paper','off');
})