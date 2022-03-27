//import { useFormulario } from '../hooks/useFormulario'
import { useState } from "react";
import React from "react";
import Swal from "sweetalert2";

const Formulario = ({setNombrePersonaje}) => {

    const initialState = {
        nombre: '',
    }

    const [inputs, setInputs] = useState(initialState);

    const {nombre} = inputs;

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

    const handleSubmit = e => {
        e.preventDefault()
        

        if(!nombre.trim()){
            return Swal.fire({
                title: 'Error!',
                text: 'No puede estar vacio',
                icon:'error'
            })
        }

        setNombrePersonaje(nombre.trim().toLowerCase());
        reset();
        console.log(nombre);
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='Ingrese personaje'
        className='form-control mb-2'
        value={nombre}
        onChange={handleChange}
        name="nombre"
        />
        <button type='submit' className='btn btn-warning' >
            Buscar
        </button>
    </form>
  )
}

export default Formulario