document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    login(username,password,role);
});


function login(username,password,role){
 if (role === 'admin') {
    const isAdmin = true;
    if (isAdmin){
        const sensitiveData = 'Datos para administradores';
        alert(sensitiveData);
    }
 } else {
            alert('Inicio de sesión exitoso como usuario normal.');
        }
    }


