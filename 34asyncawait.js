async function hello(){
  let p = new Promise((resolve=>{
    setTimeout(() => {   
    resolve(20)   
    }, 2000);
    
  }))
  return p;
}

let func2= async ()=>{
    console.log("hello");
}


async function main1(){
    let func1= await hello();
       
    console.log(func1)
          func2();
}

main1()

/*
async function hack(){
    let p1=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("getting the data-base")
        },2000)
        
    })
    const func1=await p1;
    console.log(func1);

    let p2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("attack is on 70% completed")
        },2000)
        
    })
    const func2=await p2;
    console.log(func2);

    let p3=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data base hacked")
        },2000)
        
    })
    const func3=await p3;

    console.log(func3);
    return[func1,func2,func3]
}
hack().then((value)=>{
    console.log(value)
})*/


