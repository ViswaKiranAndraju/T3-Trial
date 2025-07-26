document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;

    try {
        const res = await axios.post('http://localhost:3000/employees/login', { email });
        if (res.data) {
            localStorage.setItem('employee', JSON.stringify(res.data));
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid login');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('Error connecting to server');
    }
});
