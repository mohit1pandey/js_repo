let a=[10,50,20,30,40];

/*delete a[2];
console.log(a,a.length);*/

let b=[80,90,70,60,40];
let x=a.concat(b);
console.log(x);

// console.log(x.sort());

/*let comp=(a,b)=>{    // comparator
    return b-a;     
}
console.log(x.sort(comp));

*/

//console.log(x.reverse());

//splice
let z=a.splice(2,1,60)   // splice(start index, no of count , new value)
console.log(a,z);


// slice

let d=[10,90,70,60,40];
z=d.slice(2);
console.log(d,z);    //[ 10, 90, 70, 60, 40 ] [ 70, 60, 40 ]
