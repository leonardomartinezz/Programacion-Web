document.getElementById('btnConvertir').addEventListener('click', function() {
    const inputpesos= document.getElementById('pesos');
    const inputdolares = document.getElementById('dolares');
    const errorMensaje = document.getElementById('error');
    
    const valorPesos = inputpesos.value.trim();

    if (valorPesos === '' || isNaN(valorPesos)) {
        errorMensaje.style.display = 'block';
        inputdolares.value = '';
        return;
    }

    errorMensaje.style.display = 'none';

    const pesos = valorPesos;
    if (pesos < 1){
        errorMensaje.style.display= 'block';
        inputdolares.value = '';
        return;
    }
    const dolares = (pesos / 17.47);

    inputdolares.value = dolares.toFixed(2) + ' Dlls';
});