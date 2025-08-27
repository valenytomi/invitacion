document.addEventListener("DOMContentLoaded", function () {
  const fechaBoda = new Date("2025-11-15T19:30:00").getTime();

  function actualizarContador() {
    const ahora = new Date().getTime();
    const diferencia = fechaBoda - ahora;

    if (diferencia < 0) {
      document.getElementById("contador").innerHTML = "¡Hoy es el gran día!";
      return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
      (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").textContent = dias
      .toString()
      .padStart(2, "0");
    document.getElementById("horas").textContent = horas
      .toString()
      .padStart(2, "0");
    document.getElementById("minutos").textContent = minutos
      .toString()
      .padStart(2, "0");
    document.getElementById("segundos").textContent = segundos
      .toString()
      .padStart(2, "0");
  }

  actualizarContador();
  setInterval(actualizarContador, 1000); // Ahora se actualiza cada segundo
});
