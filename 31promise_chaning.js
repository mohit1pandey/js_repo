const loadScript = (src) => {
    return new Promise((resolve, reject) => {
            let script = document.createElement("script")
            script.type = "text/javascript"
            script.src = src
            document.body.appendChild(script)
            script.onload = (script) => {
                    resolve("Script has been loaded sir")
            }
            script.onerror = () => { reject(0) }
    })
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")
p1.then((value) => {
    console.log(value)
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")
}).then((value) => {
    console.log("Second script ready")
}).catch((error) => {
    console.log("We are sorry but we are having problems loading this script")
})


/*
// now look 
function async1(){
  let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("fist task is conpleted ");
    },2000)
  })
  return p1;
}

function async2(data){
   return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(`${data} second task is conpleted`);
    },2000)
  })
 
}

function async3(data){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(`${data} third task is conpleted`);
    },2000)
  })
  
}

let p=async1();

// now the use of callback

p.then(value=>{
  console.log(value);
   return async2(value);        // retuern the return value of the async2
}).then((value)=>{
  console.log(value);
  return async3(value);
}).then(value=>{
  console.log(value);
}).catch(error=>
  console.error(error)
)


console.log("hello");
 */