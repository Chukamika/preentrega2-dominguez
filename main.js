// Array de objetos con información de las monedas
const monedas = [
  {
    nombre: "Dólar Americano",
    abreviatura: "USD",
    tasaCambio: 1.0,
  },
  {
    nombre: "Euro",
    abreviatura: "EUR",
    tasaCambio: 0.90,
  },
  {
    nombre: "Peso Uruguayo",
    abreviatura: "UYU",
    tasaCambio: 38.0,
  },
  {
    nombre: "Peso Argentino",
    abreviatura: "ARG",
    tasaCambio: 600.0,
  },
  {
    nombre: "Peso Chileno",
    abreviatura: "CLP",
    tasaCambio: 815.0,
  },
  {
    nombre: "Real Brasileño",
    abreviatura: "BRL",
    tasaCambio: 4.85,
  },
];

function obtenerInformacionMonedas() {
  let informacion = "Información de las monedas disponibles:\n";

  for (const moneda of monedas) {
    informacion += `\nNombre: ${moneda.nombre}\nAbreviatura: ${moneda.abreviatura}\nTasa de Cambio: ${moneda.tasaCambio}\n`;
  }

  return informacion;
}

// Función para realizar la conversión de monedas
function convertirMoneda() {
  let continuar = true;

  while (continuar) {
    // Mostrar información de las monedas disponibles en una alerta
    alert(obtenerInformacionMonedas());

    const deMoneda = prompt(
      "Ingrese la moneda de origen (ej. USD, EUR, UYU, ARG, CLP, BRL.):"
    ).toUpperCase();
    const aMoneda = prompt(
      "Ingrese la moneda de destino (ej. USD, EUR, UYU, ARG, CLP, BRL.):"
    ).toUpperCase();

    const monedaOrigen = monedas.find((moneda) => moneda.abreviatura === deMoneda);
    const monedaDestino = monedas.find((moneda) => moneda.abreviatura === aMoneda);

    if (monedaOrigen && monedaDestino) {
      const amount = parseInt(
        prompt("Ingrese la cantidad a convertir:")
      );
      const convertedAmount = amount * monedaDestino.tasaCambio / monedaOrigen.tasaCambio;

      // Mostrar el resultado en un mensaje de alerta
      alert(
        `${amount} ${monedaOrigen.abreviatura} son equivalentes a ${convertedAmount.toFixed(
          2
        )} ${monedaDestino.abreviatura}`
      );

      // Preguntar al usuario si desea realizar otra conversión
      const respuesta = prompt(
        "¿Desea realizar otra conversión? (Sí / No)"
      ).toUpperCase();
      continuar = respuesta === "SI" || respuesta === "S";
    } else {
      alert("Las monedas ingresadas no son válidas. Intente nuevamente.");
    }
  }
}

// Llamar a la función para realizar la conversión al cargar la página
convertirMoneda();


