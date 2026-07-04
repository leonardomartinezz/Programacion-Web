document.getElementById('btnConvertir').addEventListener('click', function() {
    const inputedad = document.getElementById('edad');
    const inputvalidacion = document.getElementById('validacion');
    const errorMensaje = document.getElementById('error');
    
    const valoredad = parseInt(inputedad.value, 10);

    if (isNaN(valoredad) || valoredad < 1 || valoredad > 100) {
        errorMensaje.style.display = 'block';      
        inputvalidacion.value = '';               
        return;                                   
    }
    
    errorMensaje.style.display = 'none';

    if (valoredad < 18) {
        inputvalidacion.value = 'No puedes votar!';
    } 
    else {
        inputvalidacion.value = 'Puedes votar!';
    }
});
