const cantidadInput = document.getElementsByClassName('cantidad')[0];
const totalSpan = document.querySelector('.total');

cantidadInput.addEventListener('input', () => {
  const cantidad = cantidadInput.value;
  const precioUnitario = 102000;
  const total = cantidad * precioUnitario;

  totalSpan.textContent = '$' + total;
});


const botonComprar = document.getElementById("botonComprar");
const ventanaEmergente = document.getElementById("ventanaEmergente");
const fondo = document.getElementById("fondo");
const botonAceptar = document.getElementById("botonAceptar");
const botonCancelar = document.getElementById("botonCancelar");

botonComprar.addEventListener("click", function() {
  ventanaEmergente.style.display = "block";
  fondo.style.display = "block";
});

botonAceptar.addEventListener("click", function() {
  // Código para realizar la compra
  ventanaEmergente.style.display = "none";
  fondo.style.display = "none";
});

botonCancelar.addEventListener("click", function() {
  ventanaEmergente.style.display = "none";
  fondo.style.display = "none";
});
