console.log("hell")

let abc= document.getElementById("abc");
var x= abc.hasAttribute("style"); 
console.log(x);

abc.setAttribute("hidden","true");

setTimeout(function(){
    abc.removeAttribute("hidden")
},2000)

console.log(abc.attributes)


// user defined attributes
//use data keyword
let div2=document.getElementById("pqr")

console.log(div2.dataset)
console.log(div2.dataset.pussy="billo")   // changed to billow