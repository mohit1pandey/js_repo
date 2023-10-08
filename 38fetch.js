let city="hongkong";
let p = fetch(`https://goweather.herokuapp.com/weather/${city}`)
// let p = fetch(`https://goweather.herokuapp.com/weather/newyork`)

p.then(response=>{
    console.log(response.headers)
    console.log(response.status)
    return response.json();
}).then((value)=>{
    console.log( value)
}).catch(error=>{
    console.log(error)
})

/*let p = fetch(`https://meowfacts.herokuapp.com/`)
// let p = fetch(`https://goweather.herokuapp.com/weather/newyork`)

p.then(response=>{
    console.log(response.headers)
    console.log(response.status)
    return response.text();
}).then((value)=>{
    console.log( value)
}).catch(error=>{
    console.log(error)
})
*/