let homeResult = document.getElementById("scr1")
let guestResult = document.getElementById("scr2")
let count1 = 0
let count2 = 0

function bot1() {
    count1 += 1
    homeResult.textContent = count1
    console.log(homeResult)  
}
function bot2() {
    count1 += 2
    homeResult.textContent = count1
    console.log(homeResult)  
}
function bot3() {
    count1 += 3
    homeResult.textContent = count1
    console.log(homeResult)  
}
function botA() {
    count2 += 1
    guestResult.textContent = count2
    console.log(guestResult)  
}
function botB() {
    count2 += 2
    guestResult.textContent = count2
    console.log(guestResult)  
}
function botC() {
    count2 += 3
    guestResult.textContent = count2
    console.log(guestResult)  
}