// Your code goes here
const nav = document.querySelectorAll(".nav");
const logo = document.querySelector(".logo-heading");
const intro = document.querySelector(".intro");
const content = document.querySelector(".text-content p");
const imgContent = document.querySelectorAll(".img-content");
const text = document.querySelectorAll("p");



nav[0].addEventListener("mouseover", event => {
    event.target.style.color = 'yellow';
    setTimeout(function(){
        event.target.style.color = "black";
    },250);
},false);

nav[0].addEventListener("click", event =>{
    event.target.style.color = 'blue';
    setTimeout(function(){
        event.target.style.color = 'black';
    },500);
},false);

logo.addEventListener("keydown", event =>{
    if(event.key === "Escape"){
     
    }
});
intro.addEventListener('dblclick', event =>{
    event.target.style.textShadow = "5px 5px 1px yellow, 10px 10px 1px #0000ff";
});

imgContent[0].addEventListener("mouseout", event =>{
    event.target.style.transform = 'rotate(7deg)';
    setTimeout(function(){
        event.target.style.transform = 'rotate(0deg)';
    },500)
    
},false);

imgContent[1].addEventListener("mouseout", event =>{
    event.target.style.transform = 'rotate(7deg)';
    setTimeout(function(){
        event.target.style.transform = 'rotate(0deg)';
    },500)
    
},false);

document.addEventListener("mouseleave", event =>{
    event.target.style.backgroundColor = "yellow";
    setTimeout(function(){
        event.target.style.backgroundColor = "white"
    },100)
},false);

// document.addEventListener("mouseleave", event =>{
//     event.target.st
// })
