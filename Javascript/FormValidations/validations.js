window.addEventListener("load", initEvents);

var username;
var useremail;
var userpwd;
var confpwd;
var span;

function initEvents(){
    username = document.getElementById("box_1");
    useremail = document.getElementById("box_2");
    userpwd = document.getElementById("box_3");
    confpwd = document.getElementById("box_4");
    span = document.getElementsByTagName("span");
    username.addEventListener("blur", check_blank);
    useremail.addEventListener("keyup", email_validation);
}

function check_blank(){
    var str =  username.value;
    if(str == "") {
        username.style.border = "1px solid red";
        span[0].innerHTML = "Please fill this field";
    }
    else {
        username.style.border = "1px solid green";
        span[0].innerHTML = "";
    }
}

function email_validation(){
    var pattern = /([a-z]+([.]\w+|[a-z]\w+)[@]\w+[.]\w+)/;
    var str = useremail.value;
    var valid = pattern.test(str);
    if(valid){
        span[1].innerHTML = "Valid EmailID";
    }
    else {
        span[1].innerHTML = "Invalid EmailID";
    }
}