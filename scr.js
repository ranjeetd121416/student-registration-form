function validateForm() {

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let password = document.getElementById("password");
    let cpassword = document.getElementById("cpassword");

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let phoneError = document.getElementById("phoneError");
    let passwordError = document.getElementById("passwordError");
    let cpasswordError = document.getElementById("cpasswordError");

    clearAll();

    let valid = true;

    if (name.value.trim().length < 3) {
        showError(name, nameError, "Name must be at least 3 characters");
        valid = false;
    }

    let emailPattern = /^[a-zA-Z]+@[a-zA-Z]{3}\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(email.value.trim())) {
        showError(email, emailError, "Enter a valid email address");
        valid = false;
    }

    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value.trim())) {
        showError(phone, phoneError, "Enter a valid 10-digit phone number");
        valid = false;
    }

    let passPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[&$#@]).{7,}$/;
    if (!passPattern.test(password.value)) {
        showError(password, passwordError, "Min 7 chars, capital, number & symbol");
        valid = false;
    }

    if (password.value !== cpassword.value) {
        showError(cpassword, cpasswordError, "Passwords do not match");
        valid = false;
    }

    if (valid) {
        alert("Registration Successful");
    }
}

function showError(input, errorBox, message) {
    input.classList.add("error");
    errorBox.innerText = message;
    errorBox.style.visibility = "visible";
}

function clearAll() {
    document.querySelectorAll("input").forEach(i => i.classList.remove("error"));
    document.querySelectorAll("small").forEach(s => {
        s.innerText = "";
        s.style.visibility = "hidden";
    });
}
