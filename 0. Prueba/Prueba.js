let nombre = "Pepito";
let apellido = "Perez";
let nombreDeUsuario = "PepitoIsTheBest";
let edad = 21;
let correoElectronico = "pepito123@example.com";
let mayorDeEdad = true;
let dinerAhorrado = 100000;
let deudas = 10000;
let nombreCompleto = nombre + " " + apellido;
let dineroReal = dinerAhorrado - deudas;
let apodo = "Pep";

document.write(nombreCompleto + "<br />");
document.write(dineroReal + "<br />");

function fullName (completName, nickname){
    document.write("Mi nombre es " + completName + ", pero prefiero que me digas " + nickname + "." + "<br />");
}

fullName(nombreCompleto,apodo);

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free"){
    document.write("Solo puedes tomar los cursos gratis");
}
else if (tipoDeSuscripcion === "Basic"){
    document.write("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if (tipoDeSuscripcion === "Expert"){
    document.write("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if (tipoDeSuscripcion === "ExpertPlus"){
    document.write("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

//Ejemplos con arrays

//Ejemplo 1: Con solo arrays

/*const Suscripciones= ["Free","Basic","Expert","Expert+"];
const Respuestas=["Solo puedes tomar los cursos gratis",
                  "Puedes tomar casi todos los cursos de Platzi durante un mes",
                  "Puedes tomar casi todos los cursos de Platzi durante un año",
                  "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];

index=Suscripciones.indexOf(tipoDeSuscripcion);
if (index==-1){
    console.error("No exisite este plan u.u");
}
else{
    console.log(Respuestas[index]);
}*/

//Ejemplo 2: Con diccionario

/*const tipoDeSuscripcion = "ExpertPlus";

const options = {
	"Free": "Solo puedes tomar los cursos gratis",
	"Basic": "Puedes tomar casi todos los cursos de Platzi durante un mes",
	"Expert": "Puedes tomar casi todos los cursos de Platzi durante un año",
	"ExpertPlus": "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}

console.log(options[tipoDeSuscripcion]);*/

//Ejemplo 3: Con objetos

/*var tiposDeSuscripcion = [
    {plan: "Free", mensaje: "Solo puedes tomar los cursos gratis"},
    {plan: "Basic", mensaje: "Puedes tomar casi todos los cursos de Platzi durante un mes"},
    {plan: "Expert", mensaje: "Puedes tomar casi todos los cursos de Platzi durante un año"},
    {plan: "ExpertPlus", mensaje: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}
]
  
var tipoSuscripcion = "Basic";

tiposDeSuscripcion.forEach((tiposuscrip)=>{
   if(tiposuscrip.plan==tipoSuscripcion){
       console.log(tiposuscrip.mensaje);
       return;
   }
});*/

//Ejemplo 4: Con arreglo bidimensional

/*const tipoDeSuscripcion = 'ExpertPlus';
const Suscripciones = [["Free", "Solo puedes tomar los cursos gratis"], ["Basic", "Puedes tomar casi todos los cursos de Platzi durante un mes"], ["Expert", "Puedes tomar casi todos los cursos de Platzi durante un año"], ["ExpertPlus", "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"]];

for (const suscripcion of Suscripciones ){
    if (suscripcion[0] == tipoDeSuscripcion ){
        console.log(suscripcion[1])
    }
};*/

let t = 0;
while (t < 5){
    document.write("<br/>" + "El valor de t es " + t);
    t ++;
}

let i = 10;
while (i >= 2){
    document.write("<br/>" + "El valor de i es " + i);
    i --;
}
/*
let respuesta = 0;
do {
  respuesta = prompt('¿Cual es el resultado de 2 + 2?')
  respuesta *= 1;
} while (!(respuesta === 4));

alert("Felicidades");*/ //Lo dejo como comentario porque cada vez que recargo se dipara y es molesto

function primerElemento (array){
    let p = array[0];
    document.write("<br/>" + "El primer elemento es " + p);
}

let list = ["banano", "pera", "melon", "manzana"];
let list2 = [1,2,3,4,5,6,7,8,9];

primerElemento(list);
primerElemento(list2);

function todosLosElementos (array){
    let l = array.length;
    for (let i = 0; i < l; i++){
        document.write("<br/>" + "El elemento " + i + " es: " + array[i]);
    }
}

todosLosElementos(list);

let persona = {
    nombre: 'Oscar',
    apellido: 'Aguilar',
    edad: 21
}

function todosLosObjetos(object){
    let values = [];
    values = Object.values(object);
    let l = values.length;
    for (let i = 0; i < l; i++){
        document.write("<br/>" + values[i]);
    }
}

todosLosObjetos(persona);