// script para validar los campos de los formularios


function validarNit() {
    var elementoNit = $("#txtNit");
    var nit = elementoNit.val();
    var regExp = /^[0-9]{9}\-\d$/;

    if (nit.length == 0 || !regExp.test(nit)) {
        $(elementoNit).addClass("error");
        return false;
    };
}
function validarRazonSocial() {
    var elementoRazon = $("#txtRazonSocial ");
    var razon = elementoRazon.val();
    var regExp = /^[\w\s]+$/;

    if (razon.length == 0 || !regExp.test(razon)) {
        $(elementoRazon).addClass("error");
        return false;
    };
}
function validarDireccion() {
    var elementoDireccion = $("#txtDireccion");
    var direccion = elementoDireccion.val();
    var regExp = /^[a-zA-Z0-9#\-\s]+$/;

    if (direccion.length == 0 || !regExp.test(direccion)) {
        $(elementoDireccion).addClass("error");
        return false;
    };
}
function validarTelefono() {
    var elementoTelefono = $("#txtTelefono");
    var telefono = elementoTelefono.val();
    var regExp = /^\+\d{1,3}([-. ]?\d+)+$/;

    if (telefono.length == 0 || !regExp.test(telefono)) {
        $(elementoTelefono).addClass("error");
        return false;
    };
}
function validarEmail() {
    var elementoEmail = $("#email");
    var email = elementoEmail.val();
    var regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (email.length == 0 || !regExp.test(email)) {
        $(elementoEmail).addClass("error");
        return false;
    };
}
function validarDate() {
    var elementoDate = $("#date");
    var date = elementoDate.val();
    var regExp = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/(19|20)\d{2}$/;

    if (date.length == 0 || !regExp.test(date)) {
        $(elementoDate).addClass("error");
        return false;
    }
}
function validarFormulario() {
    var elementoForm = $("#formulario");
    var nit = validarNit();
    var razon = validarRazonSocial();
    var direccion = validarDireccion();
    var telefono = validarTelefono();
    var email = validarEmail();
    var date = validarDate();

    if (nit && razon && direccion && telefono && email && date) {
        return true;
    } else {
        return false;
    }
}

//funcion para guardar los datos del formulario

var veterinarias = new Array();

function guardarFormulario() {
    var veterinaria = new Object();
    veterinaria.nit = $("#txtNit").val();
    veterinaria.razon = $("#txtRazonSocial").val();
    veterinaria.direccion = $("#txtDireccion").val();
    veterinaria.telefono = $("#txtTelefono").val();
    veterinaria.email = $("#email").val();
    veterinaria.date = $("#date").val();
    veterinarias.push(veterinaria);

    mostrarVeterinarias();
    limpiarFormulario();
}
function limpiarFormulario() {
    $("#txtNit").val("");
    $("#txtRazonSocial").val("");
    $("#txtDireccion").val("");
    $("#txtTelefono").val("");
    $("#email").val("");
    $("#date").val("");
}
function mostrarVeterinarias() {


    var tabla = "<table border='1'>";
    tabla += "<tr>";
    tabla += "<th>NIT</th>";
    tabla += "<th>Razon Social</th>";
    tabla += "<th>Direccion</th>";
    tabla += "<th>Telefono</th>";
    tabla += "<th>Email</th>";
    tabla += "<th>Fecha</th>";
    tabla += "</tr>";
    $()
    for (var i = 0; i < veterinarias.length; i++) {
        tabla += "<tr>";
        tabla += "<td>" + veterinarias[i].nit + "</td>";
        tabla += "<td>" + veterinarias[i].razon + "</td>";
        tabla += "<td>" + veterinarias[i].direccion + "</td>";
        tabla += "<td>" + veterinarias[i].telefono + "</td>";
        tabla += "<td>" + veterinarias[i].email + "</td>";
        tabla += "<td>" + veterinarias[i].date + "</td>";
        tabla += "</tr>";
    }
    tabla += "</table>";
    $("#resultado").html(tabla);
}