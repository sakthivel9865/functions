var x = new Date().getTime();

vehicles = {
    "tn2091" : {
        id: "tn2091",
        type: "car"
    },
    "tn2092" : {
        id: "tn2092",
        type: "car"
    },
    "tn2093" : {
        id: "tn2093",
        type: "car"
    },
    "tn2094" : {
        id: "tn2094",
        type: "car"
    },
    "tn2095" : {
        id: "tn2095",
        type: "car"
    }
}

tollbooths = {
    "tb1": {
        tollbooth_id: "tb001",
        pair_booth: "tb2",
        passing_vehicles: {
            "tn2091": { time: x - (40 * 60 * 60 * 1000) },
            "tn2092": { time: x - ( 3 * 60 * 60 * 1000) },
            "tn2093": { time: x - (25 * 60 * 60 * 1000) },
            "tn2094": { time: x - ( 1 * 60 * 60 * 1000) },
            "tn2095": { time: x - (19 * 60 * 60 * 1000) }
        },
    },
    "tb2": {
        tollbooth_id: "tb002",
        pair_booth: "tb1",
        passing_vehicles: {
            "tn2091": { time: x - (10 * 60 * 60 * 1000) },
            "tn2092": { time: x - (36 * 60 * 60 * 1000) },
            "tn2093": { time: x - (12 * 60 * 60 * 1000) },
            "tn2094": { time: x - (29 * 60 * 60 * 1000) },
            "tn2095": { time: x - (24 * 60 * 60 * 1000) }
        }
    }
}

function append_element(element) {
    document.querySelector(".in").appendChild(element);
    setTimeout(() => {
        element.classList.add("m1");
    }, 1000);
    element.addEventListener("transitionend", bottomfun);

    function bottomfun() {
        var a = element.innerHTML;
        var b = element.getAttribute("id");
        // alert(b);
        element.innerHTML = Billing_page("tb1", b, a);
        element.classList.add("t1");
        element.removeEventListener("transitionend", bottomfun);
        element.addEventListener("transitionend", topfunction);
    }

    function topfunction() {
        element.removeAttribute('onclick');
        document.querySelector(".queue2").appendChild(element);
        element.classList.remove('t1');
        element.classList.remove('m1');
        element.style.bottom = "0px";
        element.removeEventListener("transitionend", topfunction);
        element.addEventListener("click", backtobottom);

        function backtobottom() {
            document.querySelector(".out").appendChild(element);
            element.style.top = "0px";

            setTimeout(() => {
                element.style.top = '40%';
                element.style.transition = '2s';
            }, 1000);


            setTimeout(() => {            
                element.style.top = '100%';
                element.style.transition = '2s';
                var a = element.innerHTML;
                var b = element.getAttribute("id");
                element.innerHTML = Billing_page("tb2", b, a);
                element.addEventListener("transitionend", oldstage);
            }, 5000);
        }

        function oldstage() {

            document.querySelector(".queue1").appendChild(element);
            document.querySelector(".queue1").appendChild(element);
            element.style.top = 0;
        }

    }

}



function Billing_page(toll, veh, amount) {
    
    var vehid = vehicles[veh].id;
    if (tollbooths[toll].passing_vehicles[vehid] != null) {        
        var first_id = tollbooths[toll].passing_vehicles[vehid].time;        
        var passing_difference = Math.round(x - first_id) / (60 * 60 * 1000);
        alert(passing_difference);
        if (passing_difference < 24) {
            return 0;
        }
        else {
            var pbid = tollbooths[toll].pair_booth;
            if (tollbooths[pbid].passing_vehicles[vehid] != null) {
                var second_id = tollbooths[pbid].passing_vehicles[vehid].time;
                var cur_time_pbid_time_difference = Math.round(x - second_id) / (60 * 60 * 1000);
                // alert(cur_time_pbid_time_difference)
                if (cur_time_pbid_time_difference < 24) {
                    return 30;
                    // alert("pairboothrunning");
                }
                else {                    
                    tollbooths[toll].passing_vehicles[vehid] = { time: x };
                    console.log(tollbooths[toll].passing_vehicles);
                    return 50;
                }
            }
            else {
                tollbooths[toll].passing_vehicles[vehid] = { time: x };
                console.log(tollbooths[toll].passing_vehicles);
                return 50;
            }
        }
    }
    else {
        var pbid = tollbooths[toll].pair_booth;
        if (tollbooths[pbid].passing_vehicles[vehid] != null) {
            var second_id = tollbooths[pbid].passing_vehicles[vehid].time;
            var cur_time_pbid_time_difference = Math.round(x - second_id) / (60 * 60 * 1000);
            if (cur_time_pbid_time_difference < 24) {        
                return 30;
            }
            else {
                tollbooths[toll].passing_vehicles[vehid] = { time: x };
                console.log(tollbooths[toll].passing_vehicles);
                return 50;
            }
        }
        else{
            tollbooths[toll].passing_vehicles[vehid] = { time: x };
                console.log(tollbooths[toll].passing_vehicles);
                return 50;
        }
    }
}












// tuesday night ready to this
// Billing_page("tb1", vehicle1, element); 
// function Billing_page(toll, veh, el){
//     var vehid = veh.id;
//     var first_booth_time = tollbooths[toll].passing_vehicles[vehid].time;
//     alert(tollbooths[toll].passing_vehicles[vehid].time);
    // if(tollbooths[toll].passing_vehicles[vehid]!=null){
    //    if(tollbooths[toll].passing_vehicles[vehid].time < 24)
    // }
    // else if(tollbooths[toll].passing_vehicles[vehid]=null){
    //     console.log(false);
    //     el.innerHTML = charges;
    //     alert("vehicle isn't here");
    // 
























































    // function oldposition() {
    //     document.querySelector(".queue1").appendChild(element);
    //     element.removeEventListener("click", oldposition);
    //     element.style.top = "0px";
    //     element.removeAttribute("onclick");
    //     element.removeEventListener("transitionend", topfunction);
    //     element.setAttribute("onclick", "append_element(this)");
    //     // document.querySelector(".in").appendChild(element);
    //     // setTimeout(() => {
    //     //     element.classList.add("m1");
    //     // }, 1000);
    //     // element.addEventListener("transitionend", bottomfun);
    // }














  // if (entering_time_diff < 24) {
    //    charges = 0;

    // }
    // else if(entering_time_diff{
    //    charges = 50;
    // }

// var pairbid = toll.pair_booth;

// var pairbooth = tollbooths[pairbid];

// var second_id = pairbooth.passing_vehicles[vehid].time;






// if (f1 < 24) {
//     alert("Billing_charge_is Rs: 0 ");    
//    charges = 0;

//     alert("hai");
//     var pairbid = toll.pair_booth;
//     var pairbooth = tollbooth[pairbid];
//     var second_id = pairbooth.passing_vehicles[vehid].time;
//     console.log(second_id);
//     var differ_time = Math.abs(second_id - first_id);
//     console.log(differ_time);
//     var crossing_time = differ_time / (1 * 60 * 60 * 1000);
//     alert(crossing_time);

// }
// else {
//    charges = 50;
//     if(f1 > 24){
//         var finding_t1 = second_id - first_id;
//         alert(finding_t1);
//     }
// }



// if(crossing_time < 24){
//     alert("hai charge is 30")
//    charges = Billilng_charge_is = 30;
// }
// else if(crossing_time>=24){
//    charges = Billing_charge_is = 50;
// }
// else{
//    charges = Billing_charge_is = 0;
// }




 // var f1 = tollbooth.tb1.passing_vehicles.tn2091.time;
    // var f2 = f1 / (1 * 60 * 60 * 1000);

    // var h11 = tollbooth.tb2.passing_vehicles.tn2091.time;
    // var h22 = h11 / (1 * 60 * 60 * 1000);

    // var difference_time1 = h22-f2;
    // console.log(difference_time1);

    // if(h22 < 24){
    //    alert("Billing charge = 30");
    // }
    // else if(h22>=24){
    //    alert("Billing charge = 50");
    // }

// function Billing_page(vehicles , tolls){
//     var diff1 = tollbooth.tb1.passing_vehicles.tn2091.time - tollbooth.tb2.passing_vehicles.tn2091.time;
//     console.log(diff1);
//     var 

// }
// Billing_page();


// var x = new Date().getTime();
// var y = x - (12*1000*60*60);
// var q1 = y/(1000*60*60);
// var q2 = x/(1000*60*60);
// var k = Math.floor(q2-q1);
// console.log(k);


// var gethour = new Date().getHours();
// console.log(gethour);
// var getmin = new Date().getMinutes();
// console.log(getmin);
// document.writeln(gethour":" getmin);
// var current_time = gethour + ":" +getmin;
// console.log(current_time);

// console.log(k);

// var tollgate ={
//     tollgate_number : 2039,
//     tollgate_pair:1001,
//     tollgate_passing_vehicle : [["tn3021",7,"car"],["tn3022",3,"jeep"],["tn3021",11,"car"],["tn3023",5,"van"]],
// };

// var vehicle ={
//     Id : "tn3026",
//     time:3,
//     billing_charges:50
// };
// for(var i=0; i<tollgate_passing_vehicle.length; i++){
// if(tollgate.tollgate_passing_vehicle[i][0] == vehicle.id){
//     if(vehicle.time + tollgate.tollgate_passing_vehicle[i][1] > 24){
//         tollgate.tollgate_passing_vehicle[i][1]= 1;        
//     }
//     else {
//         tollgate.tollgate_passing_vehicle[i][1] = tollgate.tollgate_passing_vehicle[i][1] + vehicle.time; 
//     }
// }
// else if(tollgate.tollgate_passing_vehicle[i][0] != vehicle.id){

// }
// }



// var geth = new Date().getHours();
// console.log(geth);
// var milli_to_hour = tollbooth.tb1.passing_vehicles




// set time out


// element.addEventListener("transitionend",oldstage);
// function oldstage(){
//     document.querySelector(".queue1").appendChild(element);
//     element.style.top= 0;
// }







// function append_element(element) {
//     document.querySelector(".in").appendChild(element);
//     setTimeout(() => {
//         element.classList.add("middle");
//     }, 1000);

//     setTimeout(() => {
//         element.classList.add("topside");
//     }, 3000);

//     setTimeout(() => {
//         document.querySelector(".queue2").appendChild(element);
//             element.style.bottom = 0; 
//             element.addEventListener("click", backtobottom);
//     }, 5000);
//     // element.addEventListener("transitionend", function () {
//     //     element.classList.add("topside");
//     //     element.addEventListener("transitionend", topfunction);
//     // })
//     // function topfunction() {
//     //     document.querySelector(".queue2").appendChild(element);
//     //     element.style.bottom = 0;   
//     //     

//         function backtobottom(){
//             document.querySelector(".out").appendChild(element);           
//             element.removeEventListener("click",backtobottom);
//             setTimeout(() => {
//                 element.classList.add("mid1")
//             }, 2000);
//         }
//     }







// element.addEventListener("transitionend",oldstage);
// function oldstage(){
//     document.querySelector("queue1").appendChild(element);
//     element.style.bottom = 0;

// }

// }
// function append_element1(element1){
//     element1.classList.add("middle2")
//     document.querySelector(".out").appendChild(element1);
//     setTimeout(() => {       
//         element1.classList.add("middle1"); 

//         Billing_page();

//     }, 1000);

//     element1.addEventListener("transitionend", function(){
//         element1.classList.add("bottomside");
//         element1.addEventListener("transitionend", bottomfunction);       
//     })
//     function bottomfunction(){
//         document.querySelector(".queue1").appendChild(element1);
//         element1.style.top=0;
//     }
// }







// setTimeout(() => {
//     document.querySelector(".queue2").appendChild(element);
// }, 10000);

// element.addEventListener("transitionend", function(){
//     var vehid = veh.id;
//     Billing_page(toll, veh)


// });






// alert("hai");

// document.querySelector(".firstdiv").addEventListener("transitionend", vehicleway);

// function vehicleway() {

//     this.innerHTML = Billing_page("tb1", vehicle1);

//     this.style.top = "460px";

//     this.style.transition = "3s";

//     this.style.transitionDelay = "2s";

//     this.addEventListener("transitionend", nextgate1);

// }


// function nextgate1(ele) {

//     ele.style.left = "800px";

//     ele.style.transitionDelay = "2s";

//     ele.style.top = "100px";



//     this.addEventListener("transitionend", nextgate2);

//     function nextgate2() {

//         this.style.top = "230px";

//         this.addEventListener("transitionend", nextgate3);

//         function nextgate3() {

//             this.innerHTML = Billing_page("tb1", vehicle1);

//             this.style.top = "520px";


//         }
//     }
// }
