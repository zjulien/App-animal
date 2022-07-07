console.log("hello");
const list = document.querySelectorAll('.list');

function activeLink(){
    list.forEach((item) =>
   item.classList.remove('active'));
   this.classList.add('active');
    
}
list.forEach((item) =>
item.addEventListener('mouseover',activeLink));

///////////// fonction deconnexion

var deconnect = document.getElementById("deco");
console.log(deconnect);

deconnect.addEventListener('click',(e)=> {
  
  auth.signOut().then(() =>{
    console.log('user deconecté');
  })
});