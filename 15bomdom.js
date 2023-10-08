//  to access the child of the child node
console.log(document.body.childNodes[0].childNodes)
// to make the array of the any dom obj
/*
let arr=Array.from(document.body.childNodes)
console.log( arr);
document.write(arr);
*/





//siblings
let x = document.body.children[1];
console.log(document.body.children[1]);
console.log(x.previousElementSibling)
console.log(x.nextElementSibling)


//parent 
let docelm=document.documentElement;
// console.log(docelm);
console.log(docelm.parentNode);  // dcoument
console.log(docelm.parentElement);    // null



// element only navidation use Element having objects

let chbg= () => {
    document.body.children[3].style.background="red";
 
}
chbg();
