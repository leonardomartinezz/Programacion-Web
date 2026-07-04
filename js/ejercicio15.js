let estudiantes = [];


const inputNombre = document.getElementById('nombre');
const inputCalificacion = document.getElementById('calificacion');
const txtError = document.getElementById('error');
const listaEstudiantes = document.getElementById('listaEstudiantes');
const contador = document.getElementById('contador');

const resPromedio = document.getElementById('promedio');
const resMaxima = document.getElementById('maxima');
const resMinima = document.getElementById('minima');

document.getElementById('btnAgregar').addEventListener('click', agregarEstudiante);
document.getElementById('btnCalcular').addEventListener('click', calcularEstadisticas);

function agregarEstudiante() {
    const nombre = inputNombre.value.trim();
    const calificacion = parseFloat(inputCalificacion.value);

    if (nombre === '' || isNaN(calificacion) || calificacion < 0) {
        txtError.style.display = 'block';
        return;
    }

    txtError.style.display = 'none';

    const nuevoEstudiante = {
        nombre: nombre,
        calificacion: calificacion
    };
    estudiantes.push(nuevoEstudiante);

    const li = document.createElement('li');
    li.textContent = `${nuevoEstudiante.nombre} (${nuevoEstudiante.calificacion})`;
    listaEstudiantes.appendChild(li);
    contador.textContent = estudiantes.length;

    inputNombre.value = '';
    inputCalificacion.value = '';
    inputNombre.focus();
}

function calcularEstadisticas() {
    if (estudiantes.length === 0) {
        alert('Debes agregar al menos un estudiante para realizar los cálculos.');
        return;
    }

    const promedio = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0) / estudiantes.length;

    const calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    const calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    const estudianteMax = estudiantes.find(e => e.calificacion === calificacionMaxima);
    const estudianteMin = estudiantes.find(e => e.calificacion === calificacionMinima);

    resPromedio.value = promedio.toFixed(2);
    resMaxima.value = `${estudianteMax.nombre} (${calificacionMaxima})`;
    resMinima.value = `${estudianteMin.nombre} (${calificacionMinima})`;
}