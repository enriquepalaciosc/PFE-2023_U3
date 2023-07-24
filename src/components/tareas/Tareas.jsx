// Core - react
import React, { useState } from 'react'
import AgregarTareaFragment from "./fragments/AgregarTareaFragment"

// Arreglo de ejemplo de objetos para inicializar
const listaEjemplo = [
    {
        id: 1,
        nombre: 'Alimentar a los leones'
    },
    {
        id: 2,
        nombre: 'Jugar con las quimeras'
    },
    {
        id: 3,
        nombre: 'Mimir'
    }
];

// View
const Tareas = () => {
    const [tareas, setTareas] = useState(listaEjemplo);
    const [nombreTarea, setNombreTarea] = useState('');

    const handleModificarTarea = (evento) => {
        setNombreTarea(evento.target.value);
    }

    const handleAgregarTarea = (evento) => {
        if (nombreTarea === '') {
            alert('Debe escribir una Tarea');
        } else {
            let tareaNueva = {
                id: tareas.length + 1,
                nombre: nombreTarea  // Aquí se realizó la corrección
            };
            setTareas([...tareas, tareaNueva]);
            setNombreTarea('');
        }
    }

    const handleEliminarTarea = (id) => {

        let tareasFiltradas = tareas.filter(tarea => {
            return tarea.id !== id
        })
        setTareas(tareasFiltradas)
    }

    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <h1>Tareas</h1>
                </div>

                <AgregarTareaFragment
                    nombreTarea={nombreTarea}
                    handleModificarTarea={handleModificarTarea}
                    handleAgregarTarea={handleAgregarTarea}
                />

                <div className='col-12 mt-4'>
                    <h3>Lista de tareas</h3>
                </div>
                <div className='col-12'>
                    <ul className="list-group">
                        {
                            tareas.map(function (tarea) {
                                return (
                                    <li className='list-group-item' key={tarea.id}>
                                        {tarea.nombre}
                                        <button
                                            type="button"
                                            className="btn btn-outline-danger btn-sm ms-1"
                                            onClick={()=> handleEliminarTarea(tarea.id)}
                                        >Eliminar</button>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Tareas;
