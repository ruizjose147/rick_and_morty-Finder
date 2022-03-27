import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Renderizar from "./components/Renderizar";
//import Paginacion from "./components/Paginacion";
//import {setInfo} from "./components/Renderizar";

const App = () => {

    const [nombrePersonaje, setNombrePersonaje] = useState('');

    useEffect(() => {
        if (localStorage.getItem("nombreApi")) {
            setNombrePersonaje(JSON.parse(localStorage.getItem("nombreApi")));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("nombreApi", JSON.stringify(nombrePersonaje));
    }, [nombrePersonaje]);

    return(
        <div className="container">
            <h1>App Rick and Morty</h1>
            <Formulario setNombrePersonaje={setNombrePersonaje}/>
            <button
                className="btn btn-success mt-2"
                onClick={() => setNombrePersonaje("")}
            >
                Reiniciar
            </button>
            <Renderizar nombrePersonaje={nombrePersonaje} />
        </div>
    )
}

export default App;