const assert = require("assert");
const { registrarReserva, listarReservas } = require("../public/reservas");

// 1. Se registra una reserva normal
registrarReserva("Ana", "Corte", "2026-11-20", "10:00");
assert.strictEqual(listarReservas().length, 1);

// 2. No se permite una reserva duplicada
assert.throws(() => registrarReserva("Luis", "Corte", "2026-11-20", "10:00"));

// 3. Otra hora si se permite
registrarReserva("Luis", "Corte", "2026-11-20", "11:00");
assert.strictEqual(listarReservas().length, 2);
assert.strictEqual(1, 2, "Fallo intencional: no se debe publicar");
console.log("Todas las pruebas pasaron");