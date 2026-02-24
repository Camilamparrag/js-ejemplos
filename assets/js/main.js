//let: define variables con alcance de bloque y valor reasignable.
//const: define constantes de solo 


// let le dice al interprete que esto es una variable
let nombre = "Camila"
 
let saludo = "hola"

// esto es una variable constante, no cambia
const pi = 3.141516


//este console.log manda al navegador lo que le pasemos
console.log(saludo)


//esto es texto
let texto = "esto es un string"

// tipo de dato number
let numeros = 100

// tipo de dato booleano
// representa si es verdadero o falso
let verdadero = true
let falso = false

let esMayor = true

// concatenacion
//siempre va a tener representación con los textos

let nombre1 = "Camila"
let nombre2 = "Monserrat"
let edad = 33

console.log("Hola me llamo "  + nombre1 + " " + nombre2 + " " + "y tengo " + edad  + "años");


//operadores matematicos
let a = 1
let b = 2

//suma
console.log(a + b);
//resta
console.log(a - b);
//multiplacion
console.log(a * b);
//division
console.log(a / b);
//modulo
console.log(a % b);
 
//operadores de comparacion

console.log(5<3) // simbolo de menor que <
console.log(3>5) // simbolo de mayor que >
console.log(5 == 5) // simbolo de igualdad ==


//condicionales

let nota = 7;
//condicion
if (nota >= 4){
    console.log("aprobado")
} else {
    console.log("repitio!! F");
}

//funciones

function saludar(nombre) {
    console.log("hola" + nombre)
}

function esMayor(edad) {
    if (edad >=18){
        console.log("puede ver el contenido")
    } else {
        console.log("menor de edad no puedes ver el contenido!!!")
    }
}

esMayor(23);


function minusAmayus(texto) {
    console.log(texto.toUpperCase())

}

minusAmayus("hola")





let pepito = document.getElementById("h1");



pepito.addEventListener("mouseover", function(){
    pepito.style.color = "green"
});

let boton = document.getElementById("botton");

boton.addEventListener("click", function(){
    document.getElementById("seccion2").scrollIntoView({
        behavior: "smooth"
    })

})