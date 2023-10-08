/* function sum(a,b=5){   // default arg
    return a+b;

}
let z=sum(6);

console.log(z);
*/

//anonymous functions in js

/*setInterval(function(){console.log("hello");},3000);  // the function that called in the paremeter has no name 
*/
var anno= function(){
  console.log('hii');
}
setInterval(anno,2000);


// we have second syntax of annonymous function 

let arrow=()=>{
    console.log("this is arrow");
}

arrow();