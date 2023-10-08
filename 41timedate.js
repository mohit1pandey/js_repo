// time is always provided as GMT

let date= new Date();
// console.log(date.getTime())
// date.setTime(date.getTime())
// console.log(date.toUTCString())

// suppose if we want of to get the time after 1hr
date.setTime(date.getTime()+1*60*60*1000)
console.log(date.toUTCString())