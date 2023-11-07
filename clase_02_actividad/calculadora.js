let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let divide = document.getElementById("divide");
let multiplica = document.getElementById("multiplica");

let resultado = document.getElementById("resultado");

suma.addEventListener("click", hacerSuma);
resta.addEventListener("click", hacerResta);
multiplica.addEventListener("click", hacerMultiplica);
divide.addEventListener("click", hacerDivision);

function hacerSuma() {
  var a = parseFloat(document.getElementById("num1").value);
  var b = parseFloat(document.getElementById("num2").value);
  var res = a + b;
  resultado.innerHTML = `${res}`;
}

function hacerResta() {
  var a = parseFloat(document.getElementById("num1").value);
  var b = parseFloat(document.getElementById("num2").value);
  var res = a - b;
  resultado.innerHTML = `${res}`;
}

function hacerMultiplica() {
  var a = parseFloat(document.getElementById("num1").value);
  var b = parseFloat(document.getElementById("num2").value);
  var res = a * b;
  resultado.innerHTML = `${res}`;
}

function hacerDivision() {
  var a = parseFloat(document.getElementById("num1").value);
  var b = parseFloat(document.getElementById("num2").value);
  var res = a / b;
  resultado.innerHTML = `${res}`;
}
