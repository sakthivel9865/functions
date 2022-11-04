

    function defaultEle(){                

        let containerDiv = document.createElement("div");
        containerDiv.className = "contDiv";

        let inp1 = document.createElement("INPUT");
        inp1.type= "text";
        inp1.placeholder = "product name";
        inp1.className = "inp1";
        containerDiv.appendChild(inp1);

        let inp2 = document.createElement("INPUT");        
        inp2.type = "number";        
        inp2.className = "inp2";
        inp2.placeholder = "0";
        containerDiv.appendChild(inp2);       

        let inp3 = document.createElement("INPUT");
        inp3.type = "number";
        inp3.className = "inp3";
        inp3.placeholder = "0";        
        inp3.addEventListener("blur", function(){            
            multiplyAmount();
        })               
        containerDiv.appendChild(inp3);

        let textAmount = document.createElement("p");
        textAmount.innerText = 0;    

        function multiplyAmount(){                                 
            price = document.querySelector(".inp2").value;
            unit = document.querySelector(".inp3").value;
            total_amount = price * unit;            
            
            textAmount.innerText= total_amount;
            containerDiv.append(textAmount);
            document.querySelector(".totalPrice").innerText = total_amount;
        }
        
        containerDiv.appendChild(textAmount);

        
        //delete icon created
        let Tag = document.createElement("p");
        Tag.className = "iconDiv";
        image = document.createElement("span");
        image.className = "material-symbols-outlined" ;
        image.innerText = "delete";
        Tag.appendChild(image);

        // delete icon click to delete
            image.addEventListener("click",function(){                
                containerDiv.remove();
            })
        containerDiv.appendChild(Tag);

        list1 = document.querySelector(".productVal");
        list1.appendChild(containerDiv);        
                     
    }
    function addingList(){
        defaultEle();
    }
        