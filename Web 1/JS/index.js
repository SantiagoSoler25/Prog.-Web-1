
function HolaMundo() {
    alert("Hola Mundo");
}

function Saludo() {
    var nombre = document.getElementById("user").value;
    alert("Hola, " + nombre);

    nombre = nombre.toLowerCase();
    for (var i = 0; i < nombre.length; i++) {
        
        if (nombre[i] == "a" || nombre[i] == "e" || nombre[i] == "i" || nombre[i] == "o" || nombre[i] == "u") {
            console.log("El nombre tiene una vocal  " + nombre[i]);
            break;
        }
    }
}

function Suma() {
    var num1 = prompt("Ingrese el primer número: ");
    var num2 = prompt("Ingrese el segundo número: ");
    

    if (isNaN(num1) || isNaN(num2)) {
        console.log("No se puede sumar letras");
        document.getElementById("txtResultado").value = "Debe ingresar números";
    } else {
        var resultado = parseInt(num1) + parseInt(num2);
        console.log("La suma es: " + resultado);
        document.getElementById("txtResultado").value = "La suma es: " + resultado;
    }
}