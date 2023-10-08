console.log(document.cookie)
let lg= prompt("enter your language")
document.cookie=`lang=${lg} `

// document.cookie = "lang=; expires=Thu, 01 Jan 1970 00:00:00 UTC"

// to expire a cookie just after ome hr
let date= new Date();
date.setTime(date.getTime()+1*60*60*1000)
let time=date.toUTCString()
console.log(time)
document.cookie=`name=hello;expires=${time}`;


document.cookie="url=http://127.0.0.1:5500/1.html"  


// non ascii char like emogie for them the encodeURI is required
document.cookie="hii=¢£"
console.log(document.cookie)