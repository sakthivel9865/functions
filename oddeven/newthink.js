function myfun(){
    var element = document.createElement('div');
    element.className = "newvalue";
    document.querySelector(".header").appendChild(element); 
    element.innerHTML = Math.floor(Math.random() * 10);  
    element.addEventListener("click",function(){
        funname(element);
    });
}
function funname(element){
    var a = element.innerText;
    var b = element;
    if(a % 2 == 0){
        document.querySelector(".oddbox").appendChild(b);    
    }
    else{
        document.querySelector(".evenbox").appendChild(b);    
    }
}
    
