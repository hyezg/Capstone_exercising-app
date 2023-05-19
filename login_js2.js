"use strict";

const loginId = document.getElementById('signUpEmail');
const loginPw = document.getElementById('signUpPassword');
const loginBtn = document.getElementById('signInButton');

function color() {
    if((loginId.value.length>0 && loginId.value.indexOf("@")!==-1) 
        && loginPw.value.length>=5){
        loginBtn.style.backgroundColor = "#0095F6";
        loginBtn.disabled = false;
    }else{
        loginBtn.style.backgroundColor = "rgb(255, 170, 155)";
        loginBtn.disabled = true;
    }
}

function moveToMain(){
    location.replace("main.html");
}

loginId.addEventListener('keyup', color);
loginPw.addEventListener('keyup', color);
loginBtn.addEventListener('click',moveToMain);