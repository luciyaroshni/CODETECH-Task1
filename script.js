document.addEventListener('DOMContentLoaded', function() {
    // If on the welcome page, display the welcome message
    if (document.getElementById('welcomeMessage')) {
        const urlParams = new URLSearchParams(window.location.search);
        const username = urlParams.get('username');
        if (username) {
            document.getElementById('welcomeMessage').textContent = `Welcome, ${username}!`;
        } else {
            document.getElementById('welcomeMessage').textContent = 'Welcome!';
        }
    }

    // Example validation before submitting the login form (client-side)
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (!username || !password) {
                alert('Please fill in all fields.');
                event.preventDefault();
            }
        });
    }
});
