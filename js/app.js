const body=document.querySelector("body");
body.classList.toggle("key-pressed");
const keycode=document.querySelector(".keycode");
const azkititle=document.querySelector(".keycode-title");
const eventkey=document.querySelector(".key");
const eventlocation=document.querySelector(".location");
const eventcode=document.querySelector(".code");
const eventwhich=document.querySelector(".which");

body.addEventListener("keydown" , function(event){
    event.preventDefault()
    body.classList.toggle("key-pressed");
    azkititle.innerHTML=event.which;
    eventkey.innerHTML=event.key;
    eventlocation.innerHTML=event.location;
    eventcode.innerHTML=event.code;
    eventwhich.innerHTML=event.which;
    keycode.innerHTML=event.key;
    console.log(event);
    

})
