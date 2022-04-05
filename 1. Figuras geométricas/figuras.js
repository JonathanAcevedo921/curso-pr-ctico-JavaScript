// Código del cuadrado

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

// Código del triángulo

function perimetroTriangulo(lado1, lado2, lado3) {
  return lado1 + lado2 + lado3;
}

function areaTriangulo(lado1, lado2, lado3) {
  const semiperimetro = (lado1 + lado2 + lado3) / 2;
  const area = Math.sqrt((semiperimetro)*(semiperimetro - lado1)*(semiperimetro - lado2)*(semiperimetro - lado3))
  return area;
}

// Código del cí­rculo

function perimetroCirculo(radio) {
  const PI = Math.PI;
  return radio * 2 * PI;
}

function areaCirculo(radio) {
  const PI = Math.PI;
  return (radio * radio) * PI;
}

/*===================================
Interacción HTML
====================================*/

//Cuadrado

function calcularPerimetroCuadrado() {
  const input = document.getElementById("lado_cuadrado");
  const value = parseFloat(input.value);
  const resultadoCuadrado = document.getElementById("container_resultado_cuadrado");

  const perimetro = perimetroCuadrado(value);
  resultadoCuadrado.innerHTML = "El perimetro del cuadrado es: " + perimetro;
}

function calcularAreaCuadrado() {
  const input = document.getElementById("lado_cuadrado");
  const value = parseFloat(input.value);
  const resultadoCuadrado = document.getElementById("container_resultado_cuadrado");

  const area = areaCuadrado(value);
  resultadoCuadrado.innerHTML = "El área del cuadrado es: " + area;
}

//Tríangulo

function calcularPerimetroTriangulo() {
  const input1 = document.getElementById("lado1_triangulo");
  const input2 = document.getElementById("lado2_triangulo");
  const input3 = document.getElementById("lado3_triangulo");
  const value1 = parseFloat(input1.value);
  const value2 = parseFloat(input2.value);
  const value3 = parseFloat(input3.value);
  const resultadoTriangulo = document.getElementById("container_resultado_triangulo");

  const perimetro = perimetroTriangulo(value1, value2, value3);
  resultadoTriangulo.innerHTML = "El perimetro del tríangulo es: " + perimetro;
}

function calcularAreaTriangulo() {
  const input1 = document.getElementById("lado1_triangulo");
  const input2 = document.getElementById("lado2_triangulo");
  const input3 = document.getElementById("lado3_triangulo");
  const value1 = parseFloat(input1.value);
  const value2 = parseFloat(input2.value);
  const value3 = parseFloat(input3.value);
  const resultadoTriangulo = document.getElementById("container_resultado_triangulo");

  const area = areaTriangulo(value1, value2, value3);
  resultadoTriangulo.innerHTML = "El área del tríangulo es: " + area;
}

//Círculo 

function calcularPerimetroCirculo() {
  const input = document.getElementById("radio_circulo");
  const value = parseFloat(input.value);
  const resultadoCirculo = document.getElementById("container_resultado_circulo");

  const perimetro = perimetroCirculo(value);
  resultadoCirculo.innerHTML = "El perimetro del círculo es: " + perimetro;
}

function calcularAreaCirculo() {
  const input = document.getElementById("radio_circulo");
  const value = parseFloat(input.value);
  const resultadoCirculo = document.getElementById("container_resultado_circulo");

  const area = areaCirculo(value);
  resultadoCirculo.innerHTML = "El área del círculo es: " + area;
}