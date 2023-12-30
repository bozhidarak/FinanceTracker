// Login form logic
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('loginEmail').value;
    var password = document.getElementById('loginPassword').value;

    // Retrieve user data from local storage
    var userData = localStorage.getItem(email);
    if (userData) {
        userData = JSON.parse(userData);

        // Compare credentials
        if (userData.password === password) {
            alert('Login successful!');
            // Here you can redirect the user to another page or change the UI accordingly
        } else {
            alert('Incorrect password. Please try again.');
        }
    } else {
        alert('No user found with that email. Please register.');
    }
});
