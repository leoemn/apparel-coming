function isValidEmail(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(email);
}

document.querySelector('.email-button').addEventListener('click', function() {
    const emailInput = document.querySelector('.text-input');
    const errorMessage = document.getElementById('error-message');

    if (!isValidEmail(emailInput.value)) {
        emailInput.style.border = '2px solid hsl(0, 93%, 68%)'; // Change border to red
        errorMessage.textContent = 'Please providre a valid email'; // Set error message
        errorMessage.style.display = 'block'; // Display the error message
    } else {
        emailInput.style.border = '0.5px solid hsl(0, 36%, 70%)'; // Reset border to original
        errorMessage.style.display = 'none'; // Hide error message
        // Proceed with the next steps, e.g., sending the email to the server.
        console.log('Email is valid');
    }
});
