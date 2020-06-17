var money = 10
var cost1 = 10
var bought1 = 0
var totincr = 0

function click1(){
    if (money >= cost1) {
        money -= cost1;
        cost1 = cost1*1.25 + 1;
        bought1 += 1;
        document.getElementById("currentMoney").innerHTML = money;
        document.getElementById("costOne").innerHTML = cost1;
        document.getElementById("boughtOne").innerHTML = bought1;
    }
}

function loop(){
    totincr = bought1 * 2;
    money += totincr;
    document.getElementById("currentMoney").innerHTML = money;
}

window.setInterval(function(){
    loop();
}, 1000);

