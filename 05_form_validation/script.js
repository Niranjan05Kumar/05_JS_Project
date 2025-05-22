
function validation(){
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    var emailError = document.getElementById("email-error");
    var phoneError = document.getElementById("phone-error");
    var passwordError = document.getElementById("password-error");
    var confirmPasswordError = document.getElementById("confirm-password-error");

    var success = document.getElementById("success");

    emailError.innerHTML = "";
    phoneError.innerHTML = "";
    passwordError.innerHTML = "";
    confirmPasswordError.innerHTML = "";
    
    if(email == ""){
        emailError.innerHTML = "*Email is required";
        return false;
    }
    else if(!email.includes('@') || !email.includes('.com')){
        emailError.innerHTML = "*Invalid email";
        return false;
    }
    else if(phone == ""){
        phoneError.innerHTML = "*Phone No. is required";
        return false;
    }
    else if(phone.length != 10 || isNaN(phone)){
        phoneError.innerHTML = "*Invalid phone number";
        return false;
    }
    else if(password == "" || password.length < 4){
        passwordError.innerHTML = "*Password must be at least 4 characters long";
        return false;
    }
    else if(confirmPassword == "" || confirmPassword != password){
        confirmPasswordError.innerHTML = "*Passwords do not match";
        return false;
    }
    else{
        alert("Form submitted successfully");
        return true;
    }
}