function handleSubmit(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        window.location.href = 'home.html';
    } else {
        alert('Incorrect username or password. Please try again.');
    }
}

document.getElementById('Login').addEventListener('click', handleSubmit);
