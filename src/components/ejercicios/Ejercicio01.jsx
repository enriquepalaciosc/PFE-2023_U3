import React, { useState } from 'react'

const Ejercicio01 = () => {
    const [valorNeto, setValorNeto] = useState(0)
    const [valorTotal, setValorTotal] = useState(0)

    const handleValorNeto = (evento) => {
        setValorNeto(parseInt(evento.target.value))
        console.log(evento.target.value)
    }

    const handleCalcular = (evento) => {
        console.log("Presionado botón calcular")
        let iva = valorNeto * 0.19
        let total = valorNeto + iva
        setValorTotal(total)
    }

    return (
        <>
            <h2>Ingrese valor neto</h2>

            <label htmlFor="neto">Valor neto</label>
            <input
                type="number"
                name="neto"
                id="neto"
                value={valorNeto}
                onChange={handleValorNeto}
            />

            <button
                type="button"
                onClick={handleCalcular}
            >Calcular</button>
        </>
    )
}

export default Ejercicio01