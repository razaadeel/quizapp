var userName = document.getElementById("userName");
var userPassword = document.getElementById("userPassword");
function signUp() {

    var user = { Name: userName.value, Password: userPassword.value};

    localStorage.setItem("data", JSON.stringify(user));

    userName.value = '';
    userPassword.value = '';

    alert("SignUp Successful. enter Username and password to login");
    window.location.href = "index.html";
}



function signIn() {
    var parseData = localStorage.getItem("data");

    var user =  JSON.parse(parseData);

    var userEnteredEmail = document.getElementById("userName").value;
    var userEnteredPassword = document.getElementById("userPassword").value;

    if (userEnteredEmail === user.Name && userEnteredPassword === user.Password) {

        document.getElementById("userName").value = "";       
        document.getElementById("userPassword").value = "";

        alert("Succesfully Login");
        location = 'quiz/quiz.html';
    } 
    else{
        (alert("Something Wrong! Please Enter the correct User name and password"))
    }
}