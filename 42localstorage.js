let key= prompt("enter the key")
let value= prompt("enter the val")

localStorage.setItem(key,value);

let key1="name";
console.log(`the value of ${key1}is ${localStorage.getItem(key1)}`)

if(key==="red"){
    localStorage.removeItem(key);
}

if(key==0){
    localStorage.clear();
}

// to set an obj
let obj={
    name:"mohit",
    class:"pandey"
}

let objstring=JSON.stringify(obj)
localStorage.setItem("obj1",objstring)

let res=JSON.parse(localStorage.getItem("obj1"))
console.log(res);


//storeage   it will triger when the changed is happend and we need to get alert in new window
window.onstorage=(event)=>{
    alert("changed")
    console.log(event.storageArea)
    console.log(event.oldValue)


}