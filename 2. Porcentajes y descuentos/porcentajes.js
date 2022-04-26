// Código del descuento

function calcularPrecioFinal(precio, descuento) {
  const precioFinal = (precio * (100 - descuento)) / 100;
  return precioFinal;
}

/*===================================
Interacción HTML
====================================*/
const coupons = ["bronze", "silver", "gold", "diamond"];

function onClickButtom() {
  const inputPrecio = document.getElementById("precio_producto");
  const precioInicial = parseInt(inputPrecio.value);

  const inputCupon = document.getElementById("cupon_descuento");
  const cupon = inputCupon.value;

  let descuento;

  if (!coupons.includes(cupon)) {
    alert("El cupón " + cupon + " no es válido");
  } 
  else {
    if (cupon === "bronze") {
      descuento = 10;
    } 
    else if (cupon === "silver") {
      descuento = 20;
    } 
    else if (cupon === "gold") {
      descuento = 30;
    }  
    else if (cupon === "diamond") {
      descuento = 40;
    }
    const precioFinal = calcularPrecioFinal(precioInicial, descuento);

    const resultado = document.getElementById("container_resultado");
    resultado.innerHTML = "El precio con descuento son: $" + precioFinal;
  }
}

/*const resultadoCirculo = document.getElementById("container_resultado_circulo");

  const area = areaCirculo(value);
  resultadoCirculo.innerHTML = "El área del círculo es: " + area;*/