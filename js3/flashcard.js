
function createDiv(){

    var txtarea1 = document.querySelector(".area1").value;
    var txtarea2 = document.querySelector(".area2").value; 
    if((txtarea1 != "")&& (txtarea2 != "")){
        var box = document.createElement("div");
        box.className = "userCont";
        var ptag1 = document.createElement("p");    
        ptag1.innerText=txtarea1;
        ptag1.className = "ptagcss1"
        box.appendChild(ptag1);
        var ptag2 = document.createElement("p");
        ptag2.innerText = txtarea2;
        ptag2.className = "ptagcss2"
        box.appendChild(ptag2);
        document.querySelector(".area1").value="";
        document.querySelector(".area2").value=""; 


        // edit delete button container
        var buttonBox = document.createElement("div");
        buttonBox.className = "buttonContainer"


        // Edit button
        var btn1 = document.createElement("button");
        btn1.innerText = "Edit";
        btn1.className = "btn1"
        btn1.addEventListener("click", function(btnContent1){
            document.querySelector(".area1").value = btnContent1.target.parentElement.parentElement.children[0].innerText;
            
            document.querySelector(".area2").value = btnContent1.target.parentElement.parentElement.children[1].innerText;
            btnContent1.target.parentElement.parentElement.remove();
        })
        buttonBox.appendChild(btn1);



        // Delete button
        var btn2 = document.createElement("button");
        btn2.innerText = "Delete";
        btn2.className = "btn2";
        btn2.addEventListener("click", function(btnContent2){
            btnContent2.target.parentElement.parentElement.remove();        
        })
        buttonBox.appendChild(btn2);
        


        box.appendChild(buttonBox);
        document.querySelector(".flashCont").appendChild(box);
    }    

    // document.querySelector(".close").addEventListener("click",function(ele){
    //     ele.target.remove();
    // })
    
}

function closeCont(){
    document.querySelector(".content").style.display = "none";
}