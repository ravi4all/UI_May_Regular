window.addEventListener("load", initEvents);

var num_1;
var num_2;
var result = 0;
var span;
function initEvents(){
    num_1 = document.getElementById("box_1");
    num_2 = document.getElementById("box_2");
    span = document.getElementById("result");
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("sub").addEventListener("click", sub);
    document.getElementById("div").addEventListener("click", div);
    document.getElementById("mul").addEventListener("click", mul);
}

function add(){
    result = parseInt(num_1.value) + parseInt(num_2.value);
    span.innerHTML = result;
}

function sub(){
    result = num_1.value - num_2.value;
    span.innerHTML = result;
}

function div(){
    result = num_1.value / num_2.value;
    span.innerHTML = result;
}

function mul(){
    result = num_1.value * num_2.value;
    span.innerHTML = result;
}