// Parte 1: patrón básico de callback
function saludarLuego(callback) {
  // a) llamada a la función principal se hará más abajo pasando la callback
  // b) ejecución de la función principal
  console.log("Buenos días");
  agregarLinea("Buenos días");
  // al final, llama a la función callback
  if (typeof callback === 'function') callback();
}

function preguntarCafe() {
  const msg = "¿Quieres un café?";
  console.log(msg);
  agregarLinea(msg);
}

// La parte 1 se ejecutará después de operaciones para respetar el orden pedido

// Utilidad mínima para imprimir en DOM
function agregarLinea(texto) {
  const out = document.getElementById('output');
  if (!out) return;
  const p = document.createElement('p');
  p.textContent = texto;
  out.appendChild(p);
}

// Parte 2: función operaciones con dos callbacks
function operaciones(a, b, minora, potencias) {
  var diferencia = a - b;
  var elevado = Math.pow(a, b);
  minora(diferencia); // invocamos la 1ª función callback
  potencias(elevado); // invocamos la 2ª función callback
}

// Invocación de operaciones con funciones anónimas que generan texto adaptable
// Cambiar estos valores para ver cómo se adapta el texto
const num1 = 5;
const num2 = 3;

operaciones(num1, num2,
  function(diferencia) {
    const msg = `La diferencia entre ${num1} y ${num2} es: ${diferencia}`;
    console.log(msg);
    agregarLinea(msg);
  },
  function(elevado) {
    const msg = `Elevando ${num1} a potencia ${num2} se obtiene: ${elevado}`;
    console.log(msg);
    agregarLinea(msg);
  }
);

// Ahora ejecutamos la parte 1
saludarLuego(preguntarCafe);
