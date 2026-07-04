document.getElementById('btnConvertir').addEventListener('click', function() {
    const inputCelsius = document.getElementById('celsius');
    const inputFahrenheit = document.getElementById('fahrenheit');
    const errorMensaje = document.getElementById('error');
    
    const valorCelsius = inputCelsius.value.trim();

    if (valorCelsius === '' || isNaN(valorCelsius)) {
        errorMensaje.style.display = 'block';
        inputFahrenheit.value = '';
        return;
    }

    errorMensaje.style.display = 'none';

    const celsius = parseFloat(valorCelsius);
    const fahrenheit = (celsius * 9 / 5) + 32;

    inputFahrenheit.value = fahrenheit.toFixed(1) + ' °F';
});