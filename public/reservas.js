const reservas = [];

// Registra una reserva si no existe otra igual
function registrarReserva(cliente, servicio, fecha, hora) {
  if (!cliente || !servicio || !fecha || !hora) {
    throw new Error("Todos los datos son obligatorios");
  }
  const yaExiste = reservas.some(
    (r) => r.servicio === servicio && r.fecha === fecha && r.hora === hora
  );
  if (yaExiste) {
    throw new Error("Ya existe una reserva para ese servicio en esa fecha y hora");
  }
  const reserva = { id: reservas.length + 1, cliente, servicio, fecha, hora };
  reservas.push(reserva);
  return reserva;
}

// Devuelve todas las reservas
function listarReservas() {
  return reservas;
}

// Permite usar este archivo en las pruebas con Node (en el navegador se ignora)
if (typeof module !== "undefined") {
  module.exports = { registrarReserva, listarReservas };
}