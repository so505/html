//**적정 체중 구하는 계산기 만들기**
//계산식) **적정체중 = (본인신장-100)*0.9**
//변수명 예) **userHeight, userWeight, goals, result, normal_w**
//최종목표 결과예시) 적정체중은 ?kg이며 ?kg 초과되셨습니다.



function calcBmi(){

    let userHeight = document.querySelector('#height').value; //키
    let userWeight = document.querySelector('#weight').value;  //몸무게 
    let calValue = document.querySelector('.proper');  //적정 체중  
    let overWeight = document.querySelector('.excess');  //초과 체중
    let overWeightText = document.querySelector('.excess_txt');  //초과 체중 텍스트
    let bmicalcText = document.querySelector('.bmicalc_text'); //bmi출력력
    // let resultWrap = document.querySelector('.result_wrap');

    // resultWrap.style.display = "block";

    let BMI = userWeight/(userHeight/100*userHeight/100);

    let BMIText = "측정불가";

    if(BMI < 18.5){
      BMIText = "저체중";
    }else if(BMI >= 18.5 && BMI < 22.9){
      BMIText = "정상";
    }else if(BMI >= 23 && BMI < 24.9){
      BMIText = "과체중";
    }else if(BMI >= 25 && BMI < 29.9){
      BMIText = "비만";
    }else if(BMI >= 30 ){
      BMIText = "고도비만";
    }

    let normalWeight = Math.round((userHeight-100)*0.9);
    let calcweight = userWeight-normalWeight;
    let weightText = "초과";
    
    if(calcweight < 0){
        weightText = "미달";
    }else{
        weightText = "초과";
    }

    calValue.innerHTML = normalWeight;
    overWeight.innerHTML = Math.abs(calcweight);
    overWeightText.innerHTML = weightText;
    bmicalcText.innerHTML=BMIText;
}

