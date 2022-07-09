console.log("hello");
const list = document.querySelectorAll('.list');

function activeLink(){
    list.forEach((item) =>
   item.classList.remove('active'));
   this.classList.add('active');
    
}
list.forEach((item) =>
item.addEventListener('mouseover',activeLink));

/////////////
var user = firebase.currentUser
console.log(user);
///////////// fonction deconnexion

var deconnect = document.getElementById("deco");
console.log(deconnect);
deconnect.onclick =  () => auth.signOut();
