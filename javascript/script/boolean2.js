//관리자정보 ID:admin /PW:admin1234 
let userId='i1';
let userPw='admin1234';

if(userId==='admin'&& userPw=='admin1234'){ // &&연산자(and 모든값이 맞아야함) ||연산자 (or 일부값만 맞으면됨)
    console.log('관리자님 어서오세요');
}else{
    console.log('로그인 실패');
};

// //=========================
// //비교연산자와 논리연산자를 이용한 게임만들기
// //w(전진) s(후진) A(좌) D(우)
// const charMove=prompt('이동방향을 입력하세요 WSAD');
// console.log(charMove);
// if(charMove=='w'||charMove=='S'||charMove=='A'||charMove=='D'){ alert(`${charMove} 1칸으로 이동`);
// //w 1칸 이동
// //S 1칸 이동
// //A 1칸 이동
// //D 1칸 이동
// }else{
//     alert('잘못 입력했습니다');
// }

//============점수에 따라 등급 출력===================
//100~90 A
//89~80 B
//79~70 C
//69~60 D
//59 이하면 F

const score=prompt('0~100사이 시험점수를 입력하세요');

if(score>=0 && score<=100){ //0~100사이 조건 정하기
    if(score>=90){
        alert("A")
    }else if(score>=80){
        alert("B")
    }else if(score>=70){
        alert("C")
    }else if(score>=60){
        alert("D")
    }else { //나머지 F처리 
        alert("F")
    }
}else{
    alert('잘못 입력했습니다')
};