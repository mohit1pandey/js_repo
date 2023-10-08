//reduce filter and map

// map return a new formatted array

let a=[10,50,60,80,70,60,40,30];

let x=a.map((value,index, array)=>{
    // console.log(value,index,array);
  return value*value-200;
})
x.forEach(element=>{
    console.log(element);
})


// filter

arr2 = a.filter(value=>{
    return(value>50)
})
console.log(arr2);

// reduce

arr2 =a.reduce((a,b)=>{
    return a+b;
})
console.log(arr2);
