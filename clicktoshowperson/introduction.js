
var person = [{
        name : "sakthi",
        age: 12,
        dob: "13/10/1990",
        b_group: "0+",

    },
    {
        name:"vasanth",
        age:15,
        dob: "12/01/2001",
        b_group: "a+",
    },
    {
        name:"kumar",
        age:42,
        dob: "23/11/1898",
        b_group: "ab+",
    },
    {
        name:"senthil",
        age:41,
        dob: "21/01/1988",
        b_group: "0-",
    },
    {
        name:"jesi",
        age:31,
        dob: "19/03/2002",
        b_group: "ab-",
    },
    {
        name:"ganesh",
        age:12,
        dob: "27/11/2001",
        b_group: "0+",
    }
];


function mybox(){
    var getting = document.querySelector("#selected");    
    var c_node = getting.cloneNode(true);
    c_node.removeAttribute("id");

    document.querySelector(".container").appendChild(c_node);

    var select_person = Math.round(Math.random()*person.length-1);

    c_node.querySelector(".name").innerText = person[select_person].name;

    c_node.querySelector(".age").innerText = person[select_person].age;

    c_node.querySelector(".dob").innerText = person[select_person].dob;

    c_node.querySelector(".b_group").innerText = person[select_person].b_group;

    document.querySelector(".container").appendChild(c_node);
    document.querySelector(".container").appendChild(c_node);
    
}