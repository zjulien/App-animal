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

///////////// fonction deconnexion

var deconnect = document.getElementById("deco");
//console.log(deconnect);
deconnect.onclick =  () => auth.signOut();

/////display id user


firebase.auth().onAuthStateChanged(function() {
    // Declare user variable
 var user = auth.currentUser
   if (user) {
    
 console.log(user.uid);
    // document.body.innerHTML = '<h1> welcome :'+user.uid.full_name+'</h1>';
   } else {
   console.log("no");
   }
});