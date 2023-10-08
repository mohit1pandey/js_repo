// primitive data types
let a=null;
let b= 345;
let c=true;
let d= BigInt("5589");
let e="mohit";
let f= Symbol("i am a symbol");
let g=undefined;
console.log(a,b,c,d,e,f,g);

console.log(typeof(f))

// json

let person={
    "mohit": true,
    "rollnp":20,
    "class":12
}
console.log(person["mohit"]);