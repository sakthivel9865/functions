function partsEle(ele){
    var boxes = document.querySelectorAll(".Front-End-Developers, .Back-End-Developers, .ProjectManagers");
    boxes.forEach(box => {
        box.style.display = "none";
        var y = document.querySelectorAll("." + ele);
        y.forEach(x=>{
            x.style.display = "flex";
        })
    });
}
function ShowAll(){
    var boxes = document.querySelectorAll(".Front-End-Developers, .Back-End-Developers, .ProjectManagers");
    boxes.forEach(box=>{
        box.style.display = "flex";
    })
}