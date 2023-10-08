console.log('Hello', 'World'); // Output: Hello World
console.log({ name: 'John', age: 30 }); // Output: { name: 'John', age: 30 }


const obj = { name: 'John', age: 30 };
console.dir(obj);
// Output:
//   Object
//     age: 30
//     name: "John"
//     __proto__: Object

// tag name and node name 

let a= document.getElementById("container")
console.log(a.tagName);
console.log(a.nodeName);


// now 
let b= document.querySelectorAll("#container");
let B=b[0].firstChild;
console.dir(B.nodeName);
console.dir(B.tagName);  // .tagName is undifined