/*
 let a=()=>{
    console.log('a');
  try{
    console.log(xxx);
    throw(new Error(" this is a error"))   // custom messaging
  }catch(error){
    console.log(error)
    console.log(error.name);
    console.log(error.message);
  }                                   // the program will not crash
   console.log("find pussy")
}
a();
*/
// custom error

class customerror extends Error{
    constructor(message){
    super(message);
    this.name="runtime error";
    }
}

let a=()=>{
    console.log('a');
  try{
   
    throw(new customerror(" this is a error"))   // custom messaging
    console.log(xxx);
  }catch(error){
    console.log(error)
    console.log(error.name);
    console.log(error.message);
  }                                   // the program will not crash
   console.log("find pussy")
}
a();