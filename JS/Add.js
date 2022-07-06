////variable /////
let nom = document.getElementById("name");
let age =document.getElementById("number_age");
let anniversaire =document.getElementById("date_anniversaire");
let poid =document.getElementById("number_poids");
let type =document.getElementById("type-label");
let mood = document.getElementsByClassName("mood_value");
let commentaire = document.getElementById("comments");


console.log(nom);
console.log(mood);

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