function calliframe(){
    document.getElementById("call").style.display = "grid";         

}
function openfiltertag(){
    // var first = document.getElementById("#call1");
    document.querySelector("#call1").style.marginLeft = "300px";
    document.querySelector("#call1").style.display = "block";    
    document.querySelector(".maindiv").style.baackgroundColor = "#E0E0E0";
}
setTimeout(() => {
    document.querySelector(".overallcon").style.display = "none";
    document.querySelector(".imagediv").style.display = "none";
    document.querySelector(".container").style.display="block";
}, 2000);

function dropdown(){
    document.getElementById("dropcontents").style.display = "inline-block";
}

function darktheme(){

    var lighttheme = document.getElementById("light");    
    var darktheme = document.getElementById("dark");
    darktheme.removeAttribute("disabled");
    lighttheme.setAttribute("disabled",true);
    
}
function theme(){
    var dark = document.getElementById("dark");
    dark.setAttribute("disabled",true);
}
function focusinput(){
    document.querySelector("#text").style.width = "400px";
}