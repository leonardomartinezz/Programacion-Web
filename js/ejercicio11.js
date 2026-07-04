document.getElementById('btnConvertir').addEventListener('click', function() {
    const inputKilómetros= document.getElementById('Kilómetros');
    const inputMillas = document.getElementById('millas');
    const errorMensaje = document.getElementById('error');
    
    const valorKilómetros = inputKilómetros.value.trim();

    if (valorKilómetros === '' || isNaN(valorKilómetros)) {
        errorMensaje.style.display = 'block';
        inputMillas.value = '';
        return;
    }

    errorMensaje.style.display = 'none';

    const Kilómetros =valorKilómetros;
    if (Kilómetros < 1){
        errorMensaje.style.display= 'block';
        inputMillas.value='';
        return;
    }
    const millas = (Kilómetros * 0.621371);

    inputMillas.value = millas.toFixed(2) + ' mi';
});