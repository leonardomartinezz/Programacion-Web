const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (operacion) => {
    const inputNum1 = document.getElementById('numero1');
    const inputNum2 = document.getElementById('numero2');
    const inputResultado = document.getElementById('resultado');

    const val1 = inputNum1.value.trim();
    const val2 = inputNum2.value.trim();

    if (val1 === '' || val2 === '' || isNaN(val1) || isNaN(val2)) {
        Swal.fire({
            icon: 'error',
            title: 'Datos inválidos',
            text: 'Por favor, asegúrate de ingresar números válidos en ambos campos.',
            confirmButtonColor: '#3498db'
        });
        inputResultado.value = ''; 
        return;
    }

    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);
    let resultadoCalculado;

    switch (operacion) {
        case 'suma':
            resultadoCalculado = sumar(num1, num2);
            break;
        case 'resta':
            resultadoCalculado = restar(num1, num2);
            break;
        case 'multiplicacion':
            resultadoCalculado = multiplicar(num1, num2);
            break;
        case 'division':
            resultadoCalculado = dividir(num1, num2);
            
            if (typeof resultadoCalculado === 'string') {
                Swal.fire({
                    icon: 'warning',
                    title: 'Operación imposible',
                    text: resultadoCalculado,
                    confirmButtonColor: '#3498db'
                });
                inputResultado.value = '';
                return;
            }
            break;
        default:
            return;
    }

    inputResultado.value = Number.isInteger(resultadoCalculado) 
        ? resultadoCalculado 
        : resultadoCalculado.toFixed(4);
};