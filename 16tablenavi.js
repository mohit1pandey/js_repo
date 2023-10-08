let table = document.body.firstElementChild.firstElementChild 
console.log(table) 
// console.log(table.rows) 
//console.log(table.caption)

let t1st= table.children[1]; 
console.log(t1st) // <thead>

t1st.firstElementChild.style.border="2px solid red" 


//to access cells
var tr1=t1st.firstElementChild 
console.log(tr1.cells);

// output

/*HTMLCollection { 0: th, 1: th, 2: th, 3: th
, length: 4 }
​
0: <th scope="col">​
1: <th scope="col">​
2: <th scope="col">​
3: <th scope="col">
​
length: 4
*/