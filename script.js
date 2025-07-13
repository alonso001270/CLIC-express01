function hacerPedido() {
    alert("Función de pedido activada");
}
document.getElementById('form-pedido').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const nombre = this.nombre.value;
  const telefono = this.telefono.value;
  const direccion = this.direccion.value;
  const detalle = this.detalle.value;
  const pago = this.pago.value;

  console.log("Pedido:", { nombre, telefono, direccion, detalle, pago });

  // Mostrar mensaje de éxito
  document.getElementById("mensaje-exito").style.display = "block";

  // Limpiar formulario
  this.reset();
});
document.getElementById('form-pedido').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = this.nombre.value;
  const telefono = this.telefono.value;
  const direccion = this.direccion.value;
  const detalle = this.detalle.value;
  const pago = this.pago.value;

  // Mostrar datos en el resumen
  document.getElementById("res-nombre").textContent = nombre;
  document.getElementById("res-telefono").textContent = telefono;
  document.getElementById("res-direccion").textContent = direccion;
  document.getElementById("res-detalle").textContent = detalle;
  document.getElementById("res-pago").textContent = pago;

  document.getElementById("resumen-pedido").style.display = "block";

  // Mensaje de éxito
  document.getElementById("mensaje-exito").style.display = "block";

  // Resetear formulario
  this.reset();
});
