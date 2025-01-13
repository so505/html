//자바스크립 동적기능에 의해서 요소가 생성될 경우 createElement();
const new_child=document.createElement('div'); //태그명만 작성가능
const parent=document.querySelector('#parent')
const new_child1=document.createElement('h2');
const new_child2=document.createElement('span');
const child2=document.querySelector('.child2');
const new_p=document.createElement('p');
const childNode=document.querySelectorAll('.child');
const new_a=document.createElement('a');
const li=document.querySelectorAll('.list li')
const addBtn=document.querySelector('#add');
const onoffBtn=document.querySelector('#onoff');
const reBtn=document.querySelector('#re');




console.log(reBtn);

//기준이 되는 부모변수.appendChild(마지막자식위치에 추가하고싶은 노드변수);
new_child.innerText='새로운요소'; //순서생각할것=생성후 실행
parent.appendChild(new_child);
new_child1.innerText='새로운 h1';
parent.appendChild(new_child1);
new_child2.innerText='새로운 span';
child2.appendChild(new_child2);
new_p.innerText='<em>새로운요소2</em>'
document.body.appendChild(new_p); 
parent.firstElementChild.appendChild(new_p);
parent.lastElementChild.appendChild(new_child2);
parent.children[2].previousElementSibling.appendChild(new_child);//세번재자식의 이전자식

//기준부모변수.insertBefore(추가요소,기준요소);
parent.insertBefore(new_p,childNode[2]); //세번째자식의 이전에요소추가
new_a.innerText='새로운 a';
parent.insertBefore(new_a,childNode[1]);

//삭제대상변수.remove();
//숨기는 개념(style.display='none')이 아닌 요소 삭제('',remove)개념! 쇼핑몰 장바구니 삭제 등으로 이동
childNode[0].remove(); // 
//숨기는 대상의 부모변수.removeChild(부모의n번째자식변수);
parent.removeChild(childNode[1]); //parent의 2번째자식을 제거

//style 속성을 이용한 css(최종 적용 속성이 1~2 소수일 경우)
li[0].style. backgroundColor='aqua';
li[0].style.fontSize='2rem';
//동시에 적용해야하는 css속성이 3개 이상 많은 경우 class를 이용한다.
//처음부터 적용된 클래스가 아닌 js동적결과에 의해 나중에 적용되는 디자인에 이용(css에서 작성해놓고 불러옴)
// li[1].className='set1';
// li[1].classList='set1 set2'; 클래스 한번에
li[1].classList='set1'; //
li[1].classList+=' set2'; //공백주의

li[2].classList.add('set1','set2'); //메서드이기때문에 위와 문법다름(",")
li[1].classList.remove('set1');
li[3].classList='box1';
li[5].classList.add('box1','colorSet');

//버튼으로 제어하는 classList
addBtn.addEventListener('click',()=>{
    li[6].classList.add('set1');
})
onoffBtn.addEventListener('click',()=>{
    li[7].classList.toggle('set2'); //교차 많이 사용
})
reBtn.addEventListener('click',()=>{
    li[8].classList.replace('set2','set1');//기존 set2를 set1로 변경
})









