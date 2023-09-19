function validar() {
    var password = document.getElementById("password").value;
    var r_password = document.getElementById("confirme_password").value;
    var error = document.getElementById("error");

    if (password !== r_password) {
        error.textContent = "Las contraseñas no coinciden";
        return false; 
    } else if(password === '') {
        error.textContent = "Ingrese una contraseña";
        return false; 
    } else if(password.length < 8) {
        error.textContent = "La contraseña debe tener al menos 8 caracteres";
        return false; 
    } else {
        error.textContent = ""; 
        return true;
    }
}

document.getElementById("form-cliente").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita la recarga de la página

    var esValido = validar();
    var datos = obtenerNombreYEmail();
    if(esValido && datos !=false){
        console.log("Registro exitoso!");
        alert('Registro exitoso!');
        console.log("Nombre:", datos.nombre);
        console.log("Email:", datos.email);
    }
});

function obtenerNombreYEmail() {
    var nombre = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    if(nombre === ' ' && email === ' '){
        console.log('Ingrese datos');
        return false;
    }
    return {nombre, email};
}






