/* button to scroll the top */

let ButtonScrool = document.getElementById("btnScroll");

/* when the user scroll down 20px from the top of the document, show the button */
window.onscroll = function(){
    scrollFunction();
}

function scrollFunction(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        ButtonScrool.style.display = "block";
    }else{
        ButtonScrool.style.display = "none"
    }
}

/* now when the user clicks on the button, scroll to the top document */
function topFunction (){
    document.body.scrollTop = 0; //for safari
    document.documentElement.scrollTop = 0; // for chrome, firefox, IE and Opera
}

/* popup */
/* let login = document.getElementById("show-login").addEventListener("click", function () {
    document.querySelector(".popup").classList.add('active');
});

console.log(login)

let popup = document.querySelector(".popup .close-btn").addEventListener("click", function () {
    document.querySelector(".popup").classList.remove('active');
});

console.log(popup);
 */

/* login and registration form */
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});

loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});

signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});