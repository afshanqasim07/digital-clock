// code for digital clock
let day = document.getElementById("day")
let hours = document.getElementById("hours")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("seconds")
var month = [
    'january',
    'febuary',
    'march',
    'aprail',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december'
]
const clock = setInterval(function time() {
    let today = new Date;
    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let h = today.getHours();
    day.innerHTML = `${d} ${month[m]} ${y}`
    hours.innerHTML = `${h}`
    minutes.innerHTML = `${min}`
    seconds.innerHTML = `${sec}`
})

