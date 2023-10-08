let abc= document.getElementsByClassName("container1");
// let abc= document.body.querySelector(".container1");
console.log(abc[0].matches(".container1"));


//closeset
let xyz= document.getElementById("id1");
console.log(xyz.closest(".gussy"));

// containes

let ppp=document.getElementById("hash");
console.log(ppp.contains(document.getElementById("id1")));