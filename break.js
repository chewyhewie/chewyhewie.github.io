function Number(abase,aexponent){
    this.base = abase;
    this.exponent = aexponent;
}

function change(a,b,c){
    a.base = b;
    a.exponent = c;
}

function display(x){
    if (x.exponent > 5){
        return (Math.round(x.base*100)/100 + "e" + x.exponent);
    }else{
        return (Math.round(x.base * Math.pow(10, x.exponent)));
    }
}

function format(x){
    while (x.base > 10){
        x.base = x.base/10;
        x.exponent = x.exponent+1;
    }
}

function multiply(x,y){
    var z = new Number(0,0);
    z.exponent = x.exponent+y.exponent;
    z.base = x.base*y.base;
    format(z);
    return(z)
}

function multiplysmall(x,y){
    x.base = x.base * y;
    format(x);
    return(x);
}

function check(x,y){
    var xe = x.exponent;
    var ye = y.exponent;
    var xb = x.base;
    var yb = y.base;
    if (xe < ye){
        return false;
    } else if (xe == ye && xb < yb){
        return false;
    } else {
        return true;
    }
}

function add(x,y){
    if (x.exponent >= y.exponent){
        var diff = x.exponent - y.exponent;
        if (diff < 10){
            x.base = x.base + y.base * Math.pow(10, -(diff));
            format(x);
            return(x);
        } else {
            return x;
        }
    }else if (y.exponent > x.exponent){
        var diff = y.exponent - x.exponent;
        if (diff < 10){
            y.base = y.base + x.base * Math.pow(10, -(diff));
            format(y);
            return(y);
        } else {
            return y;
        }
    }
}

function subtract(x,y){
    var diff = x.exponent - y.exponent;
    if (diff < 10){
        x.base = x.base - y.base * Math.pow(10, -(diff));
        format(x);
        return x;
    } else {
        return x;
    }
}

function convert(x){
    var y = new Number(0,0);
    var temp = 0;
    y.exponent = Math.floor(Math.log10(x));
    y.base = x / Math.pow(10, y.exponent);
    format(y);
    return (y); 
}
