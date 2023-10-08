//.all
/*const promise1 = Promise.resolve("Promise 1");
// const promise2 = Promise.resolve("Promise 2");
const promise2 = Promise.reject(new Error("errrorr"));
const promise3 = Promise.resolve("Promise 3");


let p =Promise.all([promise1, promise2, promise3])
  p.then((results) => {
    console.log(results); 
  },(error)=>{
    console.log(error)
  });
  */



  // .reace
  
  /*const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1"), 2000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2"), 1000));

Promise.race([promise1, promise2])
  .then((result) => {
    console.log(result); // "Promise 2"
  });
*/

// allsettled

/*const promise1 = Promise.resolve("Promise 1");
const promise2 = Promise.reject(new Error("Promise 2 rejected"));
const promise3 = Promise.resolve("Promise 3");

let p1=Promise.allSettled([promise1, promise2, promise3])
  p1.then((results) => {
    console.log(results);
  });
*/

  //.any
  const promise1 = new Promise((resolve, reject) => setTimeout(() => reject("Promise 1 rejected"), 2000));
const promise2 = new Promise((resolve,reject) => setTimeout(() => resolve("Promise 2"), 1000));
//const promise2 = new Promise((resolve,reject) => setTimeout(() => reject(new Error("eroorrrrrr")), 1000));


Promise.any([promise1, promise2])
  .then((result) => {
    console.log(result); // "Promise 2"
  })
  .catch((error) => {
    console.error(error); 
  });
