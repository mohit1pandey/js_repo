let div= document.getElementById("abc")

console.log(div.classList)
console.log(div.className="hiii pussu")  //class will modify
console.log(div.classList)
// to append the class list
console.log(div.classList.add("tom"));
console.log(div.classList)
div.classList.remove("tom")
console.log(div.classList);

// contains
console.log(div.classList.contains("hiii")) // true
// toggle
console.log(div.classList.toggle("xyz"))
console.log(div.classList);