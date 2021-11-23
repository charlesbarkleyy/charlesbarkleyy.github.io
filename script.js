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


// changing 3 bar hamburger to x
const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav_menu');
function mobilemenu() {
    burger.classList.toggle("active");
    nav.classList.toggle("active");
    
};
burger.addEventListener("click",mobilemenu)

// Name pop up window
let names = [];
let nameForm = document.getElementById('nameForm');
function saveNames(){
   let username = document.getElementById("inputName").value
   names.push(username);
   console.log(names)
   document.querySelector(".namePopup").classList.toggle("active");
}


nameForm.addEventListener("submit",saveNames)







    

