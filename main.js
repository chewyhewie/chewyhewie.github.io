var buy0 = new Number(1,1);
var buy1 = new Number(0,0);
var buy2 = new Number(0,0);
var stuff = [];
stuff.push(buy0);
stuff.push(buy1);
stuff.push(buy2);

var cost1 = new Number(1,1);
var cost2 = new Number(2,1);

function reset(){
    localStorage.clear();
    change(buy0,1,1);
    change(buy1,0,1);
    change(buy2,0,0);
    change(cost1,1,1);
    change(cost2,2,1);
    updateall();       
}

function freestuff(){
    buy0 = (1,2);
    buy1 = (1,2);   
    buy2 = (1,2);
    updatemoney();
}

function make(){
    var x = new Number(5.253,3);
    var y = new Number(3,2);
    console.log(y);
    document.getElementById("maketh").innerHTML = display(multiply(blah,y));
}

function click1(){
    if (check(stuff[0],cost1)) {
        subtract(stuff[0],cost1);
        multiplysmall(cost1,1.1);
        add(cost1, convert(1));
        add(stuff[1], convert(1));
        updatemoney();
        document.getElementById("costOne").innerHTML = display(cost1);
    }
}

function click2(){
    if (check(stuff[0],cost2)) {
        subtract(stuff[0],cost2);
        multiplysmall(cost2,1.1);
        add(cost2, convert(1));
        add(stuff[2], convert(1));
        updatemoney();
        document.getElementById("costTwo").innerHTML = display(cost2);
    }
}

function savetolocal(){
    var AllGameData = {
        sstuff: stuff, scost1:cost1, scost2:cost2,
    };
    localStorage.setItem("save", JSON.stringify(AllGameData));
}

function loading(){
    var data = JSON.parse(localStorage.getItem("save"));
    stuff = data["sstuff"];
    cost1 = data["scost1"];
    cost2 = data["scost2"];
    updateall();
}

function loop(){
    var i;
    for (i = 0; i < stuff.length-1; i++){
        stuff[i] = add(stuff[i], stuff[i+1]);
    }
    updatemoney();
}

function updatemoney(){
    document.getElementById("currentMoney").innerHTML = display(stuff[0]);
    document.getElementById("boughtOne").innerHTML = display(stuff[1]);
    document.getElementById("boughtTwo").innerHTML = display(stuff[2]);
}

function updateall(){
    document.getElementById("currentMoney").innerHTML = display(stuff[0]);
    document.getElementById("boughtOne").innerHTML = display(stuff[1]);
    document.getElementById("boughtTwo").innerHTML = display(stuff[2]);
    document.getElementById("costOne").innerHTML = display(cost1);
    document.getElementById("costTwo").innerHTML = display(cost2);
}

window.setInterval(function(){
    loop();
}, 1000);

