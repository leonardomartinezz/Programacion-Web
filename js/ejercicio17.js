const inputTarea = document.getElementById('nuevaTarea');
const btnAgregar = document.getElementById('btnAgregar');
const listaTareas = document.getElementById('listaTareas');

const obtenerTareas = () => {
    let tareasGuardadas = localStorage.getItem("tareas");
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
};

const renderizarTareas = () => {
    listaTareas.innerHTML = "";
    let tareas = obtenerTareas();
    
    tareas.forEach((item, index) => {
        const li = document.createElement("li");
        
        li.style.display = "flex";
        li.style.justifyContent = "space-between";
        li.style.alignItems = "center";
        li.style.padding = "10px 0";
        li.style.borderBottom = "1px solid #eaeaea";

        li.innerHTML = `
            <span style="font-size: 14px;">${item.tarea}</span>
            <button class="boton-convertir" style="width: auto; padding: 6px 12px; font-size: 12px; background-color: #e74c3c;" onclick="appTareas.eliminarTarea(${index})">Eliminar</button>
        `;
        listaTareas.appendChild(li);
    });
};

const manejarTareas = () => {
    return {
        agregarTarea: (texto) => {
            if(texto.trim() === "") {
                Swal.fire({
                    icon: 'error',
                    title: '¡Campo vacío!',
                    text: 'Por favor, escribe una tarea válida antes de agregar.',
                    confirmButtonColor: '#d664ed',
                    confirmButtonText: 'Entendido'
                });
                return;
            }
            
            let tareas = obtenerTareas();
            const nuevaTarea = {
                tarea: texto,
                completada: false
            };
            
            tareas.push(nuevaTarea);
            localStorage.setItem("tareas", JSON.stringify(tareas));
            renderizarTareas();
        },
        
        eliminarTarea: (index) => {
            Swal.fire({
                title: '¿Estás seguro?',
                text: "La tarea se eliminará permanentemente.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#e74c3c',
                cancelButtonColor: '#bdc3c7',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    let tareas = obtenerTareas();
                    tareas.splice(index, 1); 
                    localStorage.setItem("tareas", JSON.stringify(tareas));
                    renderizarTareas();
                    
                    Swal.fire({
                        title: '¡Eliminada!',
                        text: 'La tarea fue borrada del Local Storage.',
                        icon: 'success',
                        confirmButtonColor: '#d664ed'
                    });
                }
            });
        }
    };
};

const appTareas = manejarTareas();

btnAgregar.addEventListener('click', () => {
    appTareas.agregarTarea(inputTarea.value);
    inputTarea.value = ""; 
});

inputTarea.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        appTareas.agregarTarea(inputTarea.value);
        inputTarea.value = "";
    }
});

document.addEventListener("DOMContentLoaded", renderizarTareas);