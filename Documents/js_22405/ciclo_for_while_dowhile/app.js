// Pedir un numero 10 veces mediante prompt sumarle otro número en cada repetición, mostrar el resultado por cosola, usando for

var numero1 = parseInt(prompt("Ingrese el numero que sera sumado a cada iteraccion)"));
var suma = 0;
for(let i=0; i< 10; i++) {

    var  numero2 = parseInt(prompt("Ingrese el numero para sumar"));
    suma =  numero1 + numero2;
    console.log(suma);

}
// Pedir un texto por consola, concatenar un valor en cada iteraccion realizando una salida por resultado
// hasta que ingresa "ESC"
var texto = prompt ("Ingresa un texto");
var resultado = texto;
var textoConcatenar ="";

while(textoConcatenar != "ESC"){
    textoConcatenar = prompt("Ingrese un texto para concatenarle al inicial");
    resultado = resultado +" "+ textoConcatenar;
    console.log(resultado);

}
// Pedir un numero y mostrar alerta con mensaje "Hola" al cantidad de veces del valor del numero

var numero1 = parseInt(prompt("Ingrese un nuero para repetir el mensaje",0));
for (let i= 1; i <= numero1; i++){
    alert("Hola");
}