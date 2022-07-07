////variable
var signUp = document.getElementById('signup');

///const login = document.getElementById("login");
const loginBox = document.getElementById("login-box");
const signBox = document.getElementById("sign-box");
const newMember = document.getElementById("new");
////listener


//Fonction affichage login / register
window.onload = function () {
    document.querySelector(".login-boxHidden").style.display = "none";
};

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const hiddenLoginBug = document.querySelector(".login-boxHidden");
    const hiddenRegisterBug = document.querySelector(".login-box");


    document.querySelector("#new").addEventListener("click", e  =>{
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
        hiddenLoginBug.style.display = "flex";
        hiddenRegisterBug.style.display = "none";
    })

    document.querySelector("#linkLogin").addEventListener("click", e =>{
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        hiddenLoginBug.style.display = "none";
        hiddenRegisterBug.style.display="flex";
        createAccountForm.classList.add("form--hidden");
    })
})

//////////////envoiyer sur index.html si utilisateur toujours connecté
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // user exists and is logged in
     window.location.href = "index.html"
     } else {
 //     // User is signed out.
 //     // redirect to login
    }
   });




