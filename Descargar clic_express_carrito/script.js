
let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
  actualizarCampoPedido();
}

function actualizarCarrito() {
  const lista = document.getElementById("lista-carrito");
  lista.innerHTML = "";

  carrito.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.nombre} - ₡${item.precio}`;
    lista.appendChild(li);
  });

  document.getElementById("total").textContent = `Total: ₡${total}`;
}

function vaciarCarrito() {
  carrito = [];
  total = 0;
  actualizarCarrito();
  actualizarCampoPedido();
}

function actualizarCampoPedido() {
  const campo = document.getElementById("pedido");
  if (campo) {
    const resumen = carrito.map(item => item.nombre).join(", ");
    campo.value = resumen ? `Pedido: ${resumen}` : "";
  }
}

function hacerPedido() {
  document.getElementById("formulario").scrollIntoView({ behavior: "smooth" });
}

function enviarFormulario(event) {
  event.preventDefault();
  alert("Pedido enviado correctamente.");
  return false;
}
