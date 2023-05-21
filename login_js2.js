"use strict";

const loginId = document.getElementById('signUpEmail');
const loginPw = document.getElementById('signUpPassword');
const loginBtn = document.getElementById('signUpButton');

function color() {
    if((loginId.value.length>0 && loginId.value.indexOf("@")!==-1) 
        && loginPw.value.length>=5){
        loginBtn.style.backgroundColor = "tomato";
        loginBtn.disabled = false;
    }else{
        loginBtn.style.backgroundColor = "rgb(255, 170, 155)";
        loginBtn.disabled = true;
    }
}

function moveToBack(){
    alert("회원가입이 완료되었습니다.");
    location.replace("join.html");
}

loginId.addEventListener('keyup', color);
loginPw.addEventListener('keyup', color);
loginBtn.addEventListener('click',moveToBack);