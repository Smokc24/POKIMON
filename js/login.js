function Loguear() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('clave').value;

    let user = JSON.parse(localStorage.getItem("user"));

    if (user == null) {
        alert('No tienes cuenta, regístrate');
        window.location.href = "../vistas/registrar.html";
    } else if (user[0] == username && user[3] == password) {
        localStorage.setItem("user", username);
        alert('Usuario válido');
        window.location.href = "../vistas/Entrenador.html";
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}
