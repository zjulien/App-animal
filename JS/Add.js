
////variable /////
let nom = document.getElementById("name").value;
let age =document.getElementById("number_age").value;
let anniversaire =document.getElementById("date_anniversaire").value;
let poid =document.getElementById("number_poid").value;
let type =document.getElementById("type-label").value;
let mood = document.getElementsByClassName("mood_value").value;
let commentaire = document.getElementById("comments").value;
var add = document.getElementsByName("add");


//////fonction //////
//navbar///
const list = document.querySelectorAll('.list');

function activeLink(){
    list.forEach((item) =>
   item.classList.remove('active'));
   this.classList.add('active');
    
}
list.forEach((item) =>
item.addEventListener('mouseover',activeLink));

////////fonction add/////
var base = firebase.database().ref('users');
var user = auth.currentUser;

console.log(base);
function writeUserData(userId, nom, age, anniversaire, poid, type ,mood, commentaire ) {
  firebase.database().ref('users/' + userId).set({
    nom: nom,
    age: age,
    anniversaire : anniversaire,
    poid :poid,
    type : type,
    mood : mood,
    commentaire : commentaire
  });
}
add.onclick =  () => writeUserData();
