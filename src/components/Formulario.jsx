//import { useFormulario } from '../hooks/useFormulario'
import { useState } from "react";
import React from "react";

function Formulario() {

    const initialState = {
        nombre: '',
    }

    const [inputs, setInputs] = useState(initialState);

    const {nombre} = inputs

    const handleChange = (e) => {
        const { name, value, checkhed, type } = e.target

        setInputs((old) => ({
            ...old,
            [name]: type === "checkbox" ? checkhed : value,
        }));
    }

    const reset = () => {
        setInputs(initialState)
    }
    
    /*const [inputs, handleChange, reset] = useFormulario({
        nombre: ''
    })*/

    

    const handleSubmit = e => {
        e.preventDefault()
        console.log(nombre)

        reset()
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Ingrese personaje'
        className='form-control mb-2'
        value={nombre}
        onChange={handleChange}
        name="nombre" //coloca el nombre en la propiedad del useFormulario
        />
        <button type='submit' className='btn btn-info' >
            Buscar
        </button>
    </form>
  )
}

export default Formulario