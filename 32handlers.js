let p= new Promise((resolve, reject)=>{
    setTimeout(()=>{

     resolve(4);
    },5000)
})



p.then(value=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(2*value);
        resolve("resolved")     // reslove aways should ve inside of async function
    },2000)
  }
  )
}).then(()=>{
    console.log("hii ")  
    })



 p.then(()=>{                 //handling 
 console.log("pussy ")  
 })