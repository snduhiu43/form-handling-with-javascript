document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the page from refreshing

    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contactMethod = document.getElementById('contact').value;
    const termsAccepted = document.getElementById('terms').checked;

    // Validate the form
    let errorMessage = "";
    if (!name) errorMessage += "Name is required.\n";
    if (!validateEmail(email)) errorMessage += "Invalid email format.\n";
    if (!contactMethod) errorMessage += "Please select a contact method.\n";
    if (!termsAccepted) errorMessage += "You must accept the terms and conditions.\n";

    if (errorMessage) {
        alert(errorMessage);
        return; // Stop form submission if there are validation errors
    }

    // Store the form data in an object
    const formData = {
        name: name,
        email: email,
        contactMethod: contactMethod,
        termsAccepted: termsAccepted
    };

    // Display the form data in the "Form Summary" section
    displayFormData(formData);
});

// Email validation function
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Function to display form data dynamically
function displayFormData(data) {
    const summaryText = `
        <strong>Name:</strong> ${data.name}<br>
        <strong>Email:</strong> ${data.email}<br>
        <strong>Contact Method:</strong> ${data.contactMethod}<br>
        <strong>Terms Accepted:</strong> ${data.termsAccepted ? 'Yes' : 'No'}
    `;
    document.getElementById('summaryText').innerHTML = summaryText;
}

// Real-time email validation feedback
document.getElementById('email').addEventListener('input', function() {
    const email = this.value;
    const emailMessage = document.getElementById('emailMessage');

    if (!validateEmail(email)) {
        this.style.borderColor = 'red';
        if (!emailMessage) {
            const message = document.createElement('p');
            message.id = 'emailMessage';
            message.style.color = 'red';
            message.textContent = 'Invalid email format';
            this.parentNode.insertBefore(message, this.nextSibling);
        }
    } else {
        this.style.borderColor = '';
        if (emailMessage) {
            emailMessage.remove();
        }
    }
});
