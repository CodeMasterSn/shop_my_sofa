const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password_check')

console.log(form, username, email, password, password2)

form.addEventListener('submit', function (e) {
    e.preventDefault();
    chekcInputs();
})

function chekcInputs() {
    // get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === "") {
        //show error
        //add error class
        setErrorFor(username, "Username cannot be blank")
    } else {
        //add success class
        setSuccessFor(username)
    }

    if (emailValue === "") {
        setErrorFor(email, "Email cannot be blank")
    } else if (!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid')
    } else{
        setSuccessFor(email)
    }

    if(passwordValue === ""){
        setErrorFor(password, "Password cannot be blank")
    }else{
        setSuccessFor(password)
    }

    if(password2Value === ""){
        setErrorFor(password2, "Password_Check cannot be blank")
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, "Password does not match, retry again")
    } else{
        setSuccessFor(password2)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement; //.form-control
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


/* submit form with ajax */
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log("Form has been submited with success")

    alert("you've been subscribed in our database")
    /* we are being use ajax with a file in php */
    const request = new XMLHttpRequest();
    request.open("post", "./php/login.php");
    request.onload = function(){
        console.log(request.responseText)
    }
    request.send(new FormData(form));
});