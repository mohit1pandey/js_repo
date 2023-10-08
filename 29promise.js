console.log("this is example of promise")
/*
let promise= new Promise((resolve, reject)=>{
setTimeout(() => {
  
    let value= "promise hsa resolved";
    resolve(value);
}, 2000);
}
)

promise.then(val=>{        // val will contain the value in the resolve()
    console.log(val);
})*/
let promise= new Promise((resolve, reject)=>{
    setTimeout(() => {
      
        let value= "promise hsa resolved";
        reject(new Error("error has occured"));
        console.log(promise)
      
    }, 2000);
    }

    )
    
    promise.then(val=>{        // val will contain the value in the resolve()
        console.log(val);
    })


    console.log(promise)