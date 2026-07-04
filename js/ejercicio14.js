const inputNumeros = document.getElementById('inputNumeros');
const txtError = document.getElementById('error');

const resMayor = document.getElementById('mayor');
const resMenor = document.getElementById('menor');
const resPromedio = document.getElementById('promedio');

document.getElementById('btnCalcular').addEventListener('click', analizarNumeros);

function analizarNumeros() {
    const cadena = inputNumeros.value.trim();
    
    if (cadena === '') {
        mostrarError();
        return;
    }

    const arregloCadenas = cadena.split(',');

    const numeros = arregloCadenas.map(num => Number(num.trim()));

    const tieneValoresInvalidados = numeros.some(num => isNaN(num)) || numeros.length === 0;
    
    if (tieneValoresInvalidados) {
        mostrarError();
        return;
    }

    txtError.style.display = 'none';

    const maximo = Math.max(...numeros);
    const minimo = Math.min(...numeros);

    const suma = numeros.reduce((acc, valor) => acc + valor, 0);
    const promedio = suma / numeros.length;

    resMayor.value = maximo;
    resMenor.value = minimo;
    resPromedio.value = promedio.toFixed(2);
}

function mostrarError() {
    txtError.style.display = 'block';
    resMayor.value = '';
    resMenor.value = '';
    resPromedio.value = '';
}