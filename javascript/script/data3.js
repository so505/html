//객체공부
//변수 생성키워드 변수명 = {속성:값, 속성:값', 속성:값};
//변수명은 객체명으로도 부를 수있다.
//값이 문자인 경우 따옴표를 묶고 숫자 또는 다른 데이터타입인 경우 값만 작성한다. (다른값 null)
//객체값(속성:값에서 값)을 호출 할때는 변수명 .속성을 작성한다.
// 객체 선언시 속성명은 대입하는 값과 동일한 뜻을 가지는 속성으로 의미 있게 지정한다.
let cat1={
    age:5,
    name:'냐옹이',
    color:'삼색',
    charact:'착하고 애교 많음'
};
console.log(cat1);
console.log(cat1.age);
console.log(cat1.color);
//나비는 검정고양이고 1살이에요.
console.log(`${cat1.name}는 ${cat1.color}고양이고, ${cat1.age}살이에요`);
//변수명은 항상 다르게 선언해야 하지만 대입되는 객체 속성은 중복이 가능하다.
let cat2={
    color:['검정','흰색','노랑'], //두개이상 값 설정시 값으로 배열 활용
    age:2,
    name:'삼색이',
};
console.log(cat2);
console.log(cat2.color[0],cat2.color[1],cat2.color[2])
//객체.속성.속성;
console.log(`${cat2.color.length}색`);
//속성이나 메서드 선언 시 반드시 앞에선 객체를 먼저 선언한다.
//객체 뒤 속성이 배열인 경우는 배열의 속성(lenght)를 연결해서 작성 할수 있다.
//맨 앞에 객체가 선언됐다면 필요한 경우 속성.속성.속성을 속성끼리 연결할 수 있다.
//객체 선언
// 고양이 종은 코리안 숏헤어, 털은 흰색과 검은색, 나이는 1살, 성별은 암컷, 입양전, 중성화전, 건강상태 양호에 대한 정보로 객체생성하기
let cat3={
    variety:'숏헤어',
    color:['검정','흰색'],
    age:1,
    gender:'암컷',
    adoptionStatus:'입양 전',
    neutralization:'중성화 전',
    health:'양호'
};
console.log(`고양이 종은 ${cat3.variety}`,`털은 ${cat3.color[0]},${cat3.color[1]}`,`나이는 ${cat3.age}살,`,);
console.log('---------------------------------------------------')
//cgv 영화 페이지 조사 기준'하얼빈' 반복되는 데이터 조사 후 객체 생성하기
//const move=[{속성:값, 속성:값},{},{}]
//영화 제목: 하얼빈
//예매율:21.5
//감독:우민호
//출연진:현빈,박정민,조우진
//기본정보:15세이상관람가,114분,한국
//개봉일:2024.12.24
const movie=[{
    korName:'하얼빈',
    engName:'HARBIN',
    ReservationRate:21.5,
    director:'우민호',
    cast:['현빈','박정민','조우진'],
    gente:['액션','액션'],
    age:'15세 이상가',
    ReleaseDate:'2024.12.24',
    time:114,
    story:'하얼빈을 향한 단 하나의 목표 늙은 늑대를 처단하라'
},{
    korName:'페라리',
    engName:'FERRARI',
    ReservationRate:12.6,
    director:'마이클 만',
    cast:['아담 드라이버','페널로페 크루즈','쉐일린 우들리'],
    gente:['드라마','액션'],
    age:'15세 관람가',
    ReleaseDate:'2025.01.08',
    time:131,
    story:'1957년, 전세계를 뒤흔든 페라리의 충격 실화가 드러난다!'  
}];
// const movie={
//     korName:'하얼빈',
//     engName:'HARBIN',
//     ReservationRate:21.5,
//     director:'우민호',
//     cast:['현빈','박정민','조우진'],
//     gente:['액션','액션'],
//     age:'15세 이상가',
//     ReleaseDate:'2024.12.24',
//     time:114,
// };

//배열과 객체 함께 사용하기
//고양이 보호소 정보
//봄이, 코숏, 1살, 남, 갈색,흰색,검은색, 중성화 유
//여름이, 코숏,2살, 여,검은색,흰색,중성화 무
//가을이, 러시안블루,1살,남,회색,중성화 유
//겨울이.페르시안.2살,남,흰색,노랑,중성화 무
const catShelter=[{
    name:"봄이",
    bleed:"코숏",
    age:1,
    gender:'남',
    color:['갈색','흰색','검은색'],
    neutralization:"유"
},
{
    name:"여름이",
    bleed:"코숏",
    age:2,
    gender:'여',
    color:['흰색','검은색'],
    neutralization:"무"
},
{
    name:"가을이",
    bleed:"러시안블루",
    age:1,
    gender:'남',
    color:['회색'],
    neutralization:"유"
},
{
    name:"겨울이",
    bleed:"페르시안",
    age:2,
    gender:'남',
    color:['흰색','노랑'],
    neutralization:"무"
}];
console.log(catShelter);
console.log(catShelter[2].name)
console.log(catShelter[2].color[0]);
console.log(`${catShelter[2].name}는`,`중성화:${catShelter[3].neutralization}`)

//window 객체 활용한 메서드 종류===================
// let msg=window.alert('제작중 입니다') 
// let msg2=window.prompt('언제완성되나요?')
// let msg3=window.confirm('확인되었습니다')//확인,취소 버튼이 있는 대화상자
// console.log(msg);
// console.log(msg2);
// let msg_print=window.print();
//confirm()->print()순서로 confirm메서드의 '확인'클릭시 print가 실행되게 만드는 순서로 인쇄기능을 제작한다.
//사용자 동작=이벤트 (위 '확인'클릭시)
//실행=메서드
function gg(){
    console.log('test')
    window.location.href('https://google.com');
}
window.document.write('test')
window.document.body.style='background-color:yellow'; 
//자바스크립트에서 적용하는 css(style)은 태그의 인라인스타일 구조로 적용되기때문에 가장 우선순위가 높은 디자인으로 적용된다.(인라인 css적용시 가장우선순위)
//window==최상위 개념(생략)
//prompt('질문'); <-- 윈도우 객체가 생략되어있음 
//prompt('질문'); //window객체명이 기본값이라 생략한 상태(기본 내장으로 메서드 혼자만 있는 상태가 동작된다 라고 공부해선 안된다.)
//document.body.style
//document==웹브라우저 화면
//boy==웹브라우저 화면 내에서 제어하고 싶은 객체대상(속성)
//style==body에 적용하고 싶은 추가 속성, 속성 뒤는 대입연산자(=)로 값으 ㄹ대입한다.