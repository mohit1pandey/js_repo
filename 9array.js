let a=[10,50,70,90];

for(i in a){
    console.log(a[i]);
}

console.log(typeof(a));



//methods
let x= a.toLocaleString();
console.log(x);

console.log(a.join('*'));

//pop()
var m=a.pop();
console.log(m,a)
//push()
m=a.push(100);
console.log(m,a)

//shift
m=a.shift()
console.log(m,a)

//unshift
m=a.unshift(20)
console.log(m,a)
