window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
	form.onsubmit = validateForm
}
function validateForm() {
    var pass =document.forms["myForm"]["password"].value
    var retype_pass =document.forms["myForm"]["retype_password"].value
    if(pass !== retype_pass){
        alert("PASSWORD VERIFY ERROR");
        document.getElementById("errormsg").innerHTML = "**wrong password**";
        return false;
    }
}