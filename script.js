document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Basic validation
            if (username === 'user' && password === 'password') {
                alert('Login successful!');
                window.location.href = 'index.html'; // Redirect to home page after login
            } else {
                alert('Invalid username or password.');
            }
        });
    }
});
