
// changing 3 bar hamburger to x
const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav_menu');
function mobilemenu() {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    
};
burger.addEventListener("click",mobilemenu)

// Name pop up window
let nameForm = document.getElementById('nameForm');
let user = localStorage.getItem('user');
function saveNames(){
    let username = document.getElementById("inputName").value
    window.localStorage.setItem('user',username)
    document.querySelector(".namePopup").classList.toggle("active");
 }
 

if(user === null){
    nameForm.addEventListener("submit",saveNames)
}else{
    try{
        document.querySelector(".namePopup").classList.toggle("active"); 
    }catch(e){} 
}

user = localStorage.getItem('user');
// Adding name to first paragraph

if(user != null){
    try{
let addNameToSentence = function(){
    let person = ", "+ user +".";
    document.getElementById("nameadd").insertAdjacentText("beforeend",person);
    
}

addNameToSentence();
}catch(e){};
}

//Changing title 1 to the user inputted name
let personalName = document.getElementById("title-1");
let test = document.getElementById("bodytest");
if(!(test)){
personalName.innerHTML = user;
};




//for loop to create new color scheme
const colorPicker = function(){
    let x = document.getElementsByClassName('newcolor');
    let hex = (Math.random() * 0xfffff * 1000000).toString(16);
    hex = '#' + hex.slice(0, 6);
    for (let i =0; i<= x.length; i++){
        x[i].style.backgroundColor = hex;
    }
}
 document.getElementById("personalize").onclick = colorPicker;











    

