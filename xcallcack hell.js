// call back hell
// script https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js


function loadScript(src, callback){

  let script = document.createElement("script");
  script.src=src;
  document.body.appendChild(script);
  script.onload=()=>{
    callback(null,src);
  }
  script.onerror=()=>{
    let error = new Error("some error has occurd");
    callback(error,src);
  }

}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",(error,src)=>{
if(error){
  console.error(`error occured in script1: ${error}`)  
}else{
  console.log(`loded: ${src}`);
  loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",(error,src)=>{
    if(error){
      console.error(`error occured in script2: ${error}`)  
    }else{
      console.log(`loded: ${src}`);
      loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",(error,src)=>{
        if(error){
          console.error(`error occured in script3: ${error}`)  
        }else{
          console.log(`loded: ${src}`);
          loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",(error,src)=>{
            if(error){
              console.error(`error occured in script4: ${error}`)  
            }else{  console.log(`loded: ${src}`);
                   console.log("all scripts have beeen loded");
            }
            });
        }
        });
    }
    }); 
}
});





//promise

function loadScript(src){

 let p= new Promise((resolve,reject)=>{

  let script = document.createElement("script");
  script.src=src;
  document.body.appendChild(script);
  script.onload=()=>{
   resolve(src)
  }
  script.onerror=()=>{
    let error = new Error("some error has occurd");
    reject(error);
  }
 })
return p;
}

let p1=loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js");
p1.then(value=>{
  console.log(`loded: ${value}`)
  return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js");
}).then(value=>{
  console.log(`loded: ${value}`)
  return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap111.bundle.min.js");
}).then(value=>{
  console.log(`loded: ${value}`)
  console.log("okkk all script have been loded");
}).catch(error=>{
  console.log(error);
})