// window.addEventListener("load",function(){
//     document.getElementById("btn").addEventListener("click",show_name);
// });

window.addEventListener("load", initEvents);

function initEvents(){
    document.getElementById("btn").addEventListener("click",show_name);    
}

function show_name(){
    // console.log("Hello User");
    var username = document.getElementById("box_1").value;
    // console.log("Hello",username);
    document.getElementById("output").innerHTML = username;
}