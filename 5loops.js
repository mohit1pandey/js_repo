// let sum=0;
// let n= prompt("entrer the value of n");
// n= Number.parseInt(n);

// for (let i = 1; i <= n; i++) {
//   sum= sum+i;
// }

// console.log(n);
/*let sum = 0;
let n=5
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}

console.log(sum);
*/


let obj={
  name:"mohit",
  class:12,
  marks:45,
  sub:"maths"
}
for(let a in obj){                          // used for non itreable 
  console.log(`${a} : ${obj[a]}`);          // in gives the index
}


let a="mohit";                           // used in itreable elementes
for(let b of a){
  console.log(b);
}