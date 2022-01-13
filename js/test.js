let login = document.getElementById("show-login").addEventListener("click", function(){
    document.querySelector(".popup").classList.add('active');
});

console.log(login)

let popup = document.querySelector(".popup .close-btn").addEventListener("click", function(){
    document.querySelector(".popup").classList.remove('active');
});

console.log(popup);