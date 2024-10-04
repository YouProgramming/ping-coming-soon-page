let subForm = document.querySelector("form");
let email = document.getElementById("email");
let erroMessage = document.querySelector(".error-mesage");

subForm.addEventListener("submit",(e) => {
    e.preventDefault();
    if(isEmailFieldEmpty() && isEmailValid()){
        removeErrorMessage();
    }else{
        changeEmailborder();
        if(!isEmailFieldEmpty()){
            changeErroText(false);
        }
        else
            changeErroText(true);
    }
});

function isEmailFieldEmpty(){
    return email.value != "";
}
function isEmailValid(){
    let reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email.value);
}
function changeEmailborder(){
    email.style.outlineColor = "hsl(354, 100%, 66%)";
    email.style.color = "hsl(354, 100%, 66%)";
}
function changeErroText(bool){
    if(bool)
        erroMessage.textContent = "Please provide a valid email address";
    else
        erroMessage.textContent = "Whoops! It looks like you forgot to add your email";

}
function removeErrorMessage(){
    email.style.outlineColor = "hsl(0, 0%, 59%)";
    email.style.color = "black";
    erroMessage.textContent = "";
}