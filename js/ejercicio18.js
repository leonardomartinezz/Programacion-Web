const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

function agregarElemento() {
    const texto = input.value.trim();

    if (texto === '') {
        Swal.fire({
            icon: 'error',
            title: '¡Campo vacío!',
            text: 'Escribe algo para agregar a la lista.',
            confirmButtonColor: '#d664ed'
        });
        return;
    }

    const li = document.createElement('li');
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.padding = "10px 0";
    li.style.borderBottom = "1px solid #eaeaea";

    const textoNodo = document.createElement('span');
    textoNodo.textContent = texto;
    textoNodo.style.fontSize = "14px";
    li.appendChild(textoNodo);

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.className = 'boton-convertir';
    botonEliminar.style.width = "auto";
    botonEliminar.style.padding = "6px 12px";
    botonEliminar.style.fontSize = "12px";
    botonEliminar.style.backgroundColor = "#e74c3c";

    botonEliminar.addEventListener('click', function() {
        Swal.fire({
            title: '¿Eliminar elemento?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#e74c3c',
            cancelButtonColor: '#bdc3c7',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                li.remove();
                Swal.fire({
                    title: '¡Eliminado!',
                    icon: 'success',
                    timer: 1200,
                    showConfirmButton: false
                });
            }
        });
    });

    li.appendChild(botonEliminar);
    lista.appendChild(li);

    input.value = '';
}

botonAgregar.addEventListener('click', agregarElemento);

input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarElemento();
    }
});