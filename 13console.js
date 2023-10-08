console.error('an error ooccurd')
console.log('hello');

let x=202000;
console.assert(x>=25000,`sorry your salary is ${x} which is <25000 `);

//.table
let obj ={a1:10,a2:20,a3:30} 
console.table(obj) 

//timeout
console.time('x');
let i=0;
while(i<1000){
  document.write(i);
  i++;
}
console.timeEnd('x');

console.time('p');
for(let x=0 ;x<1000;x++){
    document.write(x);
}
console.timeEnd('p');

