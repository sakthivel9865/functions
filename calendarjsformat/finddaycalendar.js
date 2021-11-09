function fun(q1) {
    // x.style.backgroundColor = "lightgray";
    // var q1 = document.createElement("mypara");                                            
    if(document.querySelector(".newwindow")){
        document.querySelector(".newwindow").classList.remove('newwindow');
    }
    q1.classList.add("newwindow");
}
let array = ["JAN - 2021", "FEB - 2021", "MAR - 2021", "APR - 2021", "MAY - 2021", "JUN - 2021", "JUL - 2021", "AUG - 2021", "SEP - 2021", "OCT - 2021", "NOV - 2021", "DEC - 2021"];
document.querySelector("#border").innerHTML = array[8];
let n = 8;
function lessthan() {
   
    n--;
    let set = document.querySelector("#border");
    set.innerHTML = array[n];
    if (n < 0) {
        n = 11;
        set.innerHTML = array[11];
    }
    if(document.querySelector(".newwindow")){
        document.querySelector(".newwindow").classList.remove('newwindow'); 
    }
   
}
function greaterthan() {
    n++;
    let set = document.querySelector("#border");
    set.innerHTML = array[n];
    if (n > 11) {
        n = 0;
        set.innerHTML = array[0];
    }
    if(document.querySelector(".newwindow")){
        document.querySelector(".newwindow").classList.remove('newwindow');
    }
}

var d = 3;
var dates = [1, 2, 3, 4, 5, 6, 7];
var e = document.querySelector("#change");
e.style.gridColumnStart = dates[d];
function rightside() {
    d = d + 2;
    if (d == 7) {
        d = 0;
    } else if (d > 7) {
        d = 1;
    }
    var e = document.querySelector("#change");
    e.style.gridColumnStart = dates[d];
}

function leftside() {
    d = d - 2;
    if (d == -2) {
        d = 5;
    }
    if (d == -1) {
        d = 6;
    }
    var e = document.querySelector("#change");
    e.style.gridColumnStart = dates[d];
}
