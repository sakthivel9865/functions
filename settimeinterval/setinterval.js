function changingval(){
    var d = new Date();
    var hour = d.getHours()-12;
    var min = d.getMinutes();
    var sec = d.getSeconds();
    
    var h1 = hour.toString().length; 
        if(h1==1){
            hour= "0" + hour;                            
        }
       
    var m1 = min.toString().length;    
        if(m1==1){
         min= "0" + min;                
        }
         
    var s1 = sec.toString().length;     
        if(s1==1){
            sec = "0" + sec;
        }        
    
    document.querySelector(".time").innerText =  `${hour}:${min}:${sec}` ;   
}
setInterval (changingval,1000)
        
