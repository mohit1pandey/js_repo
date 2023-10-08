let x=function(e){
    alert("firt event");
    console.log(e.type);
    console.log(e.clientX,e.clientY)
}
let y=function(e){
    alert("second event");
}

let bdy=document.body

bdy.addEventListener("click",x);
bdy.addEventListener("click",y);

let a=prompt("entr 1 or 2")

if(a==2){
bdy.removeEventListener("click",y)
}

// evetn obj represents the event made by browser
