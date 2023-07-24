{/*React Core */}
import React, {useState,useEffect} from 'react'


//View*/
const Ejercicio01 = ()=> {
    const [valorNeto, setValorNeto] = useState(0)
    const [valorTotal, setValorTotal] =useState(0)
    const handleValorNeto = (evento) => {
        setValorNeto(parseInt(evento.target.value))
    }
    const handleCalcular = (evento) => {
        let iva= valorNeto *0.19
        let total=valorNeto + iva
        setValorTotal(total)
        }

    return (
        <>
            <h1>Ingrese Valor</h1>
            <label htmlFor="neto">Valor Neto</label>
            <br />
            <input id="neto" name="neto" type="number" onChange={handleValorNeto} value={valorNeto} />
            <br />
            <button type="button" onClick={handleCalcular} >Calcular</button>
            <h3 style={{ color: "red" }}>Valor Total: {valorTotal}</h3>
        </>
    )
}
{/*Exporta y muestra la pagina*/}
export default Ejercicio01