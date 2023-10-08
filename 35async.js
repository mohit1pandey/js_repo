   async function a(){
   return new Promise((resolve)=>{
    setTimeout(() => {
        console.log("first")
        resolve(20)
    }, 2000);
         
   })
   }
   async function b(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("second")
            resolve(30)
            
        }, 2000);
             
       })
   }
  
    
   let main1= async ()=>{
     let x= await a();

     let y=await b();
    console.log(x)    
    console.log(y)    
   }
   main1();


   // we need to always use the promise inside the code
   