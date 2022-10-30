
        function viewContent(imageElement){
            var x = document.querySelector('.content').style.opacity = "0.4";
            var y = document.querySelector('.largeCont').style.display = "flex";
            var z = document.querySelector('.largeCont');
            z.classList.add(imageElement);            
        }
        function closeIcon(){
            document.querySelector(".largeCont").style.display = "none";
            document.querySelector(".content").style.opacity = "1";
        }
    