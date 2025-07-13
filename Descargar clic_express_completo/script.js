
function mostrarFormulario() {
  document.getElementById('formulario').scrollIntoView({ behavior: 'smooth' });
}

function seleccionarCategoria(categoria) {
  document.getElementById('pedido').value = 'Quiero pedir de: ' + categoria;
}

function enviarPedido(event) {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const telefono = document.getElementById('telefono').value;
  const direccion = document.getElementById('direccion').value;
  const pedido = document.getElementById('pedido').value;
  const pago = document.getElementById('pago').value;

  if (!nombre || !telefono || !direccion || !pedido || !pago) {
    alert("Por favor complete todos los campos.");
    return;
  }

  document.getElementById('res-nombre').innerText = nombre;
  document.getElementById('res-telefono').innerText = telefono;
  document.getElementById('res-direccion').innerText = direccion;
  document.getElementById('res-pedido').innerText = pedido;
  document.getElementById('res-pago').innerText = pago;

  document.getElementById('resumen').style.display = 'block';
}
