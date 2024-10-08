// Obtener el DNI guardado del localStorage
const loggedInDNI = localStorage.getItem("loggedInDNI");

// Obtener los usuarios del localStorage
const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

// Buscar el usuario basado en el DNI
const user = existingUsers.find(user => user.dni === loggedInDNI);

// Mostrar la información del usuario
if (loggedInDNI) {
    document.getElementById("userDNI").textContent = loggedInDNI;
    if (user) {
        document.getElementById("userNames").textContent = `${user.firstName} ${user.lastName}`;
        document.getElementById("userEmail").textContent = user.email;
        document.getElementById("userPhone").textContent = user.phone;
    } else {
        document.getElementById("userNames").textContent = "No se encontró el usuario.";
    }
} else {
    document.getElementById("userDNI").textContent = "";
    document.getElementById("userNames").textContent = "";
    document.getElementById("userEmail").textContent = "";
    document.getElementById("userPhone").textContent = "";
}




/* ------------------------CERRAR SESIÓN------------------------ */

document.getElementById("logoutButton").addEventListener("click", function () {
    // Verificar si hay un DNI en localStorage
    const loggedInDNI = localStorage.getItem("loggedInDNI");

    if (loggedInDNI) {
        // Eliminar el DNI de localStorage (cerrar sesión)
        localStorage.removeItem("loggedInDNI");

        // Mostrar alerta de cierre de sesión con SweetAlert2
        Swal.fire({
            title: 'Has cerrado sesión',
            text: '¡Gracias por visitar nuestro sitio!',
            icon: 'info',
            imageUrl: '/header-body/logo.webp', // Reemplaza esto con la ruta de tu imagen
            imageWidth: 240, // Ajusta el ancho de la imagen
            imageHeight: 110, // Ajusta la altura de la imagen
            confirmButtonText: 'Volver a la página principal',
            customClass: {
                popup: 'swal2-popup-custom',
                title: 'swal2-title-custom',
                text: 'swal2-text-custom',
                confirmButton: 'swal2-confirm-custom'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirigir inmediatamente después de la confirmación
                window.location.href = "/";
            }
        });

        // Redirigir automáticamente a la página principal después de 7 segundos
        setTimeout(() => {
            window.location.href = "/"; // Cambia a la ruta de tu página de inicio
        }, 7000); // Redirige después de 7 segundos (ajusta según sea necesario)
    } else {
        // Si no está logueado, redirigir a la página principal
        window.location.href = "/";
    }
});

