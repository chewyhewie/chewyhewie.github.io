var stuff = [10,0,0];
var cost1 = 10;
var rcost1 = 10;
var cost2 = 20;
var rcost2 = 20;

function click1(){
    if (stuff[0] >= cost1) {
        stuff[0] -= cost1;
        rcost1 = rcost1*1.1 + 1;
        cost1 = Math.round(rcost1);
        stuff[1] += 1;
        document.getElementById("currentMoney").innerHTML = stuff[0];
        document.getElementById("costOne").innerHTML = cost1;
        document.getElementById("boughtOne").innerHTML = stuff[1];
    }
}

function click2(){
    if (stuff[0] >= cost2) {
        stuff[0] -= cost2;
        rcost2 = rcost2*1.21 + 1;
        cost2 = Math.round(rcost2);
        stuff[2] += 1;
        document.getElementById("currentMoney").innerHTML = stuff[0];
        document.getElementById("costTwo").innerHTML = cost2;
        document.getElementById("boughtTwo").innerHTML = stuff[2];
    }
}

function loop(){
    var i;
    for (i = 0; i < stuff.length-1; i++){
        stuff[i] += stuff[i+1];
    }
    document.getElementById("currentMoney").innerHTML = stuff[0];
    document.getElementById("boughtOne").innerHTML = stuff[1];
}

window.setInterval(function(){
    loop();
}, 1000);

