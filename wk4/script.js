function validateRegistrationForm() {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(span => span.innerHTML = "");

    // Name Validation
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        isValid = false;
    }

    // Email Validation
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email";
        isValid = false;
    }

    // Password Validation
    const password = document.getElementById("password").value;
    if (password.length < 8) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 8 characters";
        isValid = false;
    }

    // Confirm Password Validation
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").innerHTML = "Passwords do not match";
        isValid = false;
    }

    // Age Validation
    const age = document.getElementById("age").value;
    if (age < 18 || age > 100) {
        document.getElementById("ageError").innerHTML = "Age must be between 18 and 100";
        isValid = false;
    }

    // Gender Validation
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById("genderError").innerHTML = "Please select your gender";
        isValid = false;
    }

    // Country Validation
    const country = document.getElementById("country").value;
    if (country === "") {
        document.getElementById("countryError").innerHTML = "Please select a country";
        isValid = false;
    }

    // Terms and Conditions Validation
    const terms = document.getElementById("terms").checked;
    if (!terms) {
        document.getElementById("termsError").innerHTML = "You must accept the terms and conditions";
        isValid = false;
    }

    return isValid;
}

function validateLoginForm() {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(span => span.innerHTML = "");

    // Email Validation
    const email = document.getElementById("loginEmail").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById("loginEmailError").innerHTML = "Please enter a valid email";
        isValid = false;
    }

    // Password Validation
    const password = document.getElementById("loginPassword").value;
    if (password.trim() === "") {
        document.getElementById("loginPasswordError").innerHTML = "Password is required";
        isValid = false;
    }

    return isValid;
}
