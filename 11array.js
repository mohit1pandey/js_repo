// for loops
let a = [10, 50, 20, 30, 40];

// for each functcion  runtime for loop
a.forEach(val => {  // val represents an elment of the array
  console.log(val*val);
});

// array. from

let xxx="mohit";
let obj={
    name:"mohit",
    class:'12',
    address:"village-kunsyari"
}
let yyy=Array.from(obj);
console.log(yyy);
/*
for(a in obj){
    console.log(obj[a]);
}*/


