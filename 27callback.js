function loadScript(src,callback){
    let script =document.createElement("script");
    script.src=src;
   
    script.onload=function(){    //handle the onload event
        
        callback(null, src);
        console.log("The script is loded "+src);
    }
    script.onerror=function(){
        callback(new Error("Unexpecte error occured"),src)
    }
  document.body.appendChild(script)
}


function callback1(error,scr){
if(error){
    console.log(error)
    return;
}
console.log("success :"+ scr)
}


loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",callback1)