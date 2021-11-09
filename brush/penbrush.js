function clickbrush(et){
    var x = et.x + "px";
    var y = et.y + "px";

    var r = document.querySelector(".round");
    var r1 = r.cloneNode(true);

    r1.removeAttribute("id");
    var con = document.querySelector(".brush")
    con.appendChild(r1);

    r1.style.left = x ;
    r1.style.top = y;

    var e1 = document.querySelector("#color").value;
    var e2 = document.querySelector("#size").value;

    r1.style.backgroundColor = e1;
    r1.style.height = e2 + "px";
    r1.style.width = e2 + "px";
}