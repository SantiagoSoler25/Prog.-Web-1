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
