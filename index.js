$(document).ready(function(){

    if (localStorage.getItem('loggedInUser')) {
        showHome()
    }
    else{
        showLogin()
    }


    $('#form-signup').submit(function (event) {
        signup()
    })

    $('#form-login').submit(function (event) {

        login()
    })

    $('.show-signup').click(function () {
        showSignup()
    })

   
    $('.show-login').click(function () {
        showLogin()
    })

    $('.show-home').click(function () {
        showHome()
    })
    
    $('.show-about').click(function () {
        showAbout()
    })

    $('.show-contact').click(function () {
        showContact()
    })

    $('.logout').click(function () {
        logout()
    })

   


// sigup function

function signup(){
    var email = $('#signup-email').val();
    var pw = $('#signup-password').val();
    var users = JSON.parse(localStorage.getItem('users')) || [];


    var gmailpattern= /^[A-Za-z0-9]+@gmail\.com$/; 

    var passwordpattern= /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{3,}$/; 

    if(email.length == 0 || pw.length == 0){
        alert('Email or Password is Empty'); }

    else if(!gmailpattern.test(email)){
        alert('Invalid Email !!!'); }

    else if(email.length < 13){
            alert('Please fill Valid email');}

    else if(users.find(user => user.email === email)){
                alert("User already exist")}       
    

    else if(!passwordpattern.test(pw)){
        alert(' Your password does not match the criteria. Password must have atleast one uppercase,one lowercase,one digit  ex= Vishal13'); }

   
    else if(pw.length < 7){
            alert('Your password is weak ,Atleast have 8 characters');}

    
    else{
        users.push({email, pw})
        localStorage.setItem('users', JSON.stringify(users));
        alert('Your account has been created');
        showLogin()
    }
}    


 //login functions
 function login(){
    var email = $('#login-email').val();
    var pw = $('#login-password').val();
    var users = JSON.parse(localStorage.getItem('users')) || [];

    var user = users.find(user => user.email===email && user.pw===pw)

    if (user) {
        localStorage.setItem('loggedInUser', email)
        alert("you are successfully logged in")
        showHome()
    }else{
        alert("Invalid email and password")
    }
}


function logout() {
    localStorage.removeItem('loggedInUser')
    showLogin()
}




function showSignup() {
    $('#login-container').hide()
    $('#signup-container').show()
    $('#homepage').hide()
    $('#aboutpage').hide()
    $('#contactpage').hide()
   
}

function showLogin() {
    $('#login-container').show()
    $('#signup-container').hide()
    $('#homepage').hide()
    $('#aboutpage').hide()
    $('#contactpage').hide()
}

function showHome() {
    $('#login-container').hide()
    $('#signup-container').hide()
    $('#homepage').show()
    $('#aboutpage').hide()
    $('#contactpage').hide()
}

function showAbout() {
    $('#login-container').hide()
    $('#signup-container').hide()
    $('#homepage').hide()
    $('#aboutpage').show()
    $('#contactpage').hide()
}

function showContact() {
    $('#login-container').hide()
    $('#signup-container').hide()
    $('#homepage').hide()
    $('#aboutpage').hide()
    $('#contactpage').show()
}



});