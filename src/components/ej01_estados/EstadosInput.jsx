// core - react
import React, { useState } from 'react'

// View
const EstadosInput = () => {
    // states
    const [nombre, setNombre] = useState('Nadie')
    const handleNombreChange = (evento) => {
        setNombre(evento.target.value)
    }

    return (
        <>
            <h1>Saludo</h1>
            <p>Por favor ingrese un nombre para realizar un saludo en tiempo real</p>

            <label htmlFor="saludo">Nombre</label><br />
            <input
                id="saludo"
                name="saludo"
                type="text"
                onChange={handleNombreChange}
                value={nombre} />

            <h3 style={{ color: "red" }}>Un saludo para: {nombre}</h3>
        </>
    )
}

export default EstadosInput