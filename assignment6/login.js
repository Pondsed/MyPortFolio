window.onload = loginLoad;
function loginLoad(){
	var loginform = document.getElementById("myLogin");
	loginform.onsubmit = checkLogin
}
function checkLogin(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const register_username = urlParams.get('username');
	const register_password = urlParams.get('password');
	var login_password =document.forms["myLogin"]["password"].value
    var login_username =document.forms["myLogin"]["username"].value
	if(login_username != register_username){
		alert('Wrong Username');
		return false;
	}
	if(login_password != register_password){
		alert('Wrong Password');
		return false;
	}
}