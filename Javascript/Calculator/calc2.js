window.addEventListener("load", initEvents);

var num_1;
var num_2;
var result = 0;
var span;
function initEvents(){
    num_1 = document.getElementById("box_1");
    num_2 = document.getElementById("box_2");
    span = document.getElementById("result");
    
    buttons = document.getElementsByTagName("button");
    for(var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", calc);
    }
}

function calc(){
    var opr = event.srcElement.value;
    // console.log(elem);
    var expression = num_1.value + opr + num_2.value;
    // console.log(expression);
    var result = eval(expression);
    span.innerHTML = result;
}