// Obtener elementos del DOM
const correoInput = document.getElementById("correoE");
const btnSuscripcion = document.getElementById("btnSuscripcion");

// Agregar evento click al botón de suscripción
btnSuscripcion.addEventListener("click", validarCorreo);

// Función de validación de correo
function validarCorreo() {
  const correo = correoInput.value.trim();
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (correo === "") {
    // El campo de correo está vacío
    Swal.fire(
      "Error",
      "Por favor, ingresa tu dirección de correo electrónico.",
      "error"
    );
    correoInput.classList.add("border-danger");
  } else if (!regexCorreo.test(correo)) {
    // El formato del correo no es válido
    Swal.fire(
      "Error",
      "Por favor, ingresa una dirección de correo electrónico válida.",
      "error"
    );
    correoInput.classList.add("border-danger");
  } else {
    // El correo es válido
    Swal.fire(
      "Registrado Exitosamente",
      "¡Gracias por suscribirte! <3",
      "success"
    ).then(() => {
      correoInput.value = "";
      correoInput.classList.remove("border-danger");
    });
  }
}

// incremento y decremento de producto
const decrementBtn = document.getElementById("decrement-btn");
const incrementBtn = document.getElementById("increment-btn");
const quantityInput = document.getElementById("quantity");

// Función para decrementar la cantidad
decrementBtn.addEventListener("click", function () {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
});

// Función para incrementar la cantidad
incrementBtn.addEventListener("click", function () {
  let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
});

// Funcionalidad de las estrellas michelin:
// Obtener todas las estrellas
const stars = document.querySelectorAll(".stars i");

// Añadir un event listener a cada estrella
stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = star.dataset.rating;
    console.log("Calificación seleccionada:", rating);

    // Realizar acciones adicionales aquí, como enviar la calificación al servidor o actualizar la visualización
    // Por ejemplo, puedes resaltar las estrellas seleccionadas cambiando su color
    stars.forEach((s) => {
      if (s.dataset.rating <= rating) {
        s.style.color = "rgb(222, 70, 70)";
      } else {
        s.style.color = "gray";
      }
    });
  });
});

//Funcionalidad de los popover.
var popoverTriggerEl = document.getElementById("popover-icon");
var popover = new bootstrap.Popover(popoverTriggerEl);

var popoverTriggerE2 = document.getElementById("popover-icon2");
var popover = new bootstrap.Popover(popoverTriggerE2);

// LOGIN
function validar() {
  // obtener los valores de usuario y contraseña
  var usuario = document.getElementById("usuario").value;
  var password = document.getElementById("password").value;

  // validar si los campos no están vacíos
  if (usuario.trim() === "" || password.trim() === "") {
    Swal.fire(
      "Error",
      "Por favor ingrese un usuario y una contraseña.",
      "error"
    );
    return false;
  }

  // validar si el usuario y la contraseña son correctos
  if (usuario === "Mcsou" && password === "pass1234") {
    Swal.fire({
      title: "Bienvenido",
      text: "Espero sea de tu agrado nuestra tienda.",
      icon: "success",
    }).then(() => {
      window.location.href = "Home2.0.html";
    });
  } else {
    Swal.fire("Error", "Usuario y/o contraseña inválidos.", "error");
  }
}

function redirigirGoogle() {
  // Redirige a la pagina deseada
  window.location.href = "https://accounts.google.com/";
}
