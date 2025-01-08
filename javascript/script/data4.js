// window.document.body.style='background-color:aqua';
document.write('250107'); //window 생략(기본 내장됨)
// DOM
//객체는 변수에 선언해야한다.
//변수생성 키워드 생성변수명 = 변수에 대입되는 값;
//변수 선언 시 [] 배열선언표시 없이 복수형 데이터를 저장하면 자동으로 배열로 인식된다(Elements)s <-
// 배열 인식 결과 -> 각데이터가 [0][1] 인덱스로 구분되고 length속성이 자동추가된다.
const title1 = document.getElementsByTagName('h1');
const subtitle= document.getElementsByTagName('h2');
console.log(title1);
console.log(subtitle);
//DOM객체.속성;        //속성읽기
//DOM객체.속성='값'; //속성에 새로운 값 대입하기
title1[0].style='color:red';
title1[1].style='color:lime';
subtitle[0].style='font-size: 2.13rem';
subtitle[1].style='border:1px solid red';
subtitle[2].style='background-color: #9256';
const listWrap=document.getElementsByTagName('ul')[0]; //배열중 하나만 계속 쓰고싶을경우, 선언부터 고정할것
const list=listWrap.getElementsByTagName('li'); // li 선택할경우 document지우고 ul변수명(부모)
console.log(listWrap);
console.log(list);
listWrap.style='background-color:aqua'; //listWrap[0][0] X
list[0].style='color:red';
list[1].style='background-color: #9256';

const alistWrap=document.getElementsByTagName('ul')[1];
const alist=alistWrap.getElementsByTagName('li');
const atag1=alist[0].getElementsByTagName('a');
const atag2=alist[1].getElementsByTagName('a');
const atagAll=document.getElementsByTagName('a');
const atagUl=alistWrap.getElementsByTagName('a');
console.log(alistWrap);
console.log(alist);
console.log(atag1);
console.log(atag2);
console.log(atagAll);
console.log(atagUl);
/* 
HTML, CSS작성시 HTML의 가족관계를 우선시 하여 LI가 형제, a는 각 외동으로 각각 인식하지만 JS는 최종 선택 대상 앞의 'document' 자리에 누굴 쓰느냐에 따라 그안에 있는 태그 전체를 순서대로 인식하기 때문에 실제 HTML관계에서 a가 외동이든 아니든'ul'을 선택했다면 ul 안 모든 a를 순서대로 인식해서 인덱스 번호를 적용한다. 하지만 li의 경우 li안에는 a가 하나씩 밖에 배치안되어 있으므로 각 a를 0번째로만 인식하게 된다. 
*/
const subTitle=document.getElementsByClassName('sub_title')[0];
console.log(subTitle);
subTitle.style='background-color:lime';

const menuAll=document.getElementsByClassName('menu')[0];
const menuLi=menuAll.getElementsByTagName('li');
const menuA=menuAll.getElementsByTagName('a');
console.log(menuAll);
console.log(menuLi);
console.log(menuA);
menuAll.style='color:red';
menuLi[0].style='background-color:red';
menuLi[1].style='background-color:#2686';
menuLi[2].style='background-color:lime';
menuA[0].style='background-color:aqua';
menuA[1].style='background-color:red';
menuA[2].style='background-color:#5625';

const notice=document.getElementById('notice');
console.log(notice);
notice.style='background-color:aqua';

const container=document.getElementById('container');
const title=document.getElementById('title');
const title_sub1=title.getElementsByTagName('a');
const contents=document.getElementById('contents');
const contentsA=contents.getElementsByTagName('a');
console.log(container);
console.log(title);
console.log(title_sub1);
console.log(contents);
console.log(contentsA);
container.style='background-color:aqua';
title.style='background-color:lime';
title_sub1[0].style='background-color:#895';
title_sub1[1].style='background-color:#fff';
contents.style='background-color:red';
contentsA[0].style='background-color:#635';
contentsA[1].style='background-color:#115';

console.log('==========================')

const nav= document.getElementsByTagName('nav')[0];
const gnb= nav.getElementsByClassName('gnb')[0];
const gnbLi=gnb.getElementsByTagName('li');
const lnb=gnb.getElementsByClassName('lnb')[0];
const lnbLi=lnb.getElementsByTagName('li');
const lnbLiA=lnb.getElementsByTagName('a');

console.log(gnbLi);
nav.style='background-color:lime';
lnbLiA.style='background-color:#faf';
lnbLi.style='background-color:lime';