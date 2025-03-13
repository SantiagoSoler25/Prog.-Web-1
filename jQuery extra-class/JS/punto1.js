function OcultarImagen() {
    var img = document.querySelector('.intro');
    if (img.style.display == 'none') {
        img.style.display = 'block';
        
    } else {
        img.style.display = 'none';
    }
}

function OcultarBtn() {
    var button = document.querySelector('.button1');
    if (button.style.display == 'none') {
        button.style.display = 'inline-block';
        
    } else {
        button.style.display = 'none';
    }
    
}