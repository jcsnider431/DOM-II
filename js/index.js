// Your code goes here
const nav = document.querySelectorAll(".nav");
const logo = document.querySelector("h1");
const content = document.querySelectorAll("p");
const imgContent = document.querySelectorAll(".img");



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

logo.addEventListener("contextmenu", event =>{
    event.target.style.textTransform = "capitalize";
     
    }
);
// intro.addEventListener('dblclick', event =>{
//     event.target.style.textShadow = "5px 5px 1px yellow, 10px 10px 1px #0000ff";
// });
Array.from(content).forEach((int)=>{
    int.addEventListener('dblclick', event =>{
        event.target.style.textShadow = "5px 5px 1px yellow, 10px 10px 1px #0000ff"; 
        setTimeout(()=>{
            event.target.style.textShadow = "";
        },600)
    },false)
});

Array.from(imgContent).forEach((img)=>{
    img.addEventListener('mouseout', event =>{
        event.target.style.transform = "rotate(7deg)";
        
        setTimeout(()=>{
            event.target.style.transform = "rotate(-7deg)"
        },250)

    },false)
});
// this is before i figured out .forEach
// imgContent[0].addEventListener("mouseout", event =>{
//     event.target.style.transform = 'rotate(7deg)';
//     setTimeout(function(){
//         event.target.style.transform = 'rotate(0deg)';
//     },500)
    
// },false);

// imgContent[1].addEventListener("mouseout", event =>{
//     event.target.style.transform = 'rotate(7deg)';
//     setTimeout(function(){
//         event.target.style.transform = 'rotate(0deg)';
//     },500)
    
// },false);

document.addEventListener("mousemove", event =>{
    event.target.style.backgroundColor = "yellow";
    setTimeout(function(){
        event.target.style.backgroundColor = "white"
    },100)
},false);

// content.addEventListener("mouseenter", event =>{
//     event.target.style.fontSize = "x-large";
// })

Array.from(content).forEach((link) => {
    link.addEventListener('mouseover', event => {
        event.target.style.fontSize = "x-large";
        setTimeout(()=>{
            event.target.style.fontSize = "";
        },1000)
        // event.preventDefault();
    },false)
});

window.addEventListener("scroll", (event) =>{
    let scroll = window.scrollY;
    if(scroll > 300){
        document.querySelectorAll("h1").forEach((para) =>{
            para.style.outline = "thick solid yellow"; 
        });
        
    }else{
        document.querySelectorAll("h1").forEach((para)=>{
            para.style.outline= "thick solid blue"; 
    })}
     
});


window.addEventListener("scroll", (event) =>{
    let scroll = window.scrollY;
    if(scroll > 300){
        Array.from(content).forEach((para) =>{
            para.style.outline = "thick solid yellow"; 
        });
        
    }else{
        Array.from(content).forEach((para)=>{
            para.style.outline= "thick solid blue"; 
    })}
     
});

window.addEventListener("keydown", (event)=>{
    alert("you win!");
});

window.addEventListener("load", (event)=>{
    alert("page is finished loading");
});

window.addEventListener("keyup", (event)=>{
    alert("leave page");
});