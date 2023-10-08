let p1= new Promise((resolve,reject)=>{
    setTimeout(function(){
     
        const x= new Error("promise has been rejected");
    
        reject(x)
        // console.log(p);
    },2000)
})
let p2= new Promise((resolve,reject)=>{
    setTimeout(function(){
        
       
        const x= "success";
        resolve(x)
     //   console.log(p);
    },2000)
})


/*p1.catch(error=>{
    console.log(error);
})
*/

// consering no error can occord
p2.then(value=>{
    console.log(value);
})

// o we can do both in same function
p1.then(value=>{
    console.log("okkkkkk")
},(error)=>{
    console.log("errrrorrrr")
})








p1.finally(()=>{
    console.log("finally reject");
})

p2.finally(()=>{
    console.log("finally fullfilled");
})

