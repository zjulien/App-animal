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

/////////// fonction enregistrement de nouveau utilisateur /////

// signup
// const signupForm = document.getElementById("createAccount");
// signupForm.addEventListener('submit', e => {
//     e.preventDefault();
//     const name = signupForm['name'].value;
//     const email = signupForm['email'].value;
//     const password = signupForm['password'].value;
//     // console.log(name, email, password);
//     signupForm.reset();
//     auth.createUserWithEmailAndPassword(email, password).then((cred) => {
//         // console.log(cred);
//         return db.collection('users').doc(cred.user.uid).set({
//             Name: name,
//             Email: email,
//             Password: password
//         }).then(() => {
//             // console.log('success');
//             location = "login.html";
//         })
//     })
// })




