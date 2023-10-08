let divxx=document.getElementById("div1")
/*function changecolor(){
divxx.style.background="green";
divxx.style.border="5px solid black"
}
*/


//or 

divxx.onclick=function (event){
    divxx.style.background="green";
divxx.style.border="5px solid black"
console.log(event.target)
console.log(event.type);
}

