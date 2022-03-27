import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Personaje from "./Personaje";
import Loading from "./Loading";
import Paginacion from "./Paginacion";

const Renderizar = ({ nombrePersonaje }) => {

    const [personajes, setPersonajes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState({});

    const urlInicial = `https://rickandmortyapi.com/api/character`

    useEffect(() => {
        consumirApi(urlInicial);
    }, [urlInicial])

    useEffect(() => {
        const findByNameUrl = `https://rickandmortyapi.com/api/character/?name=${nombrePersonaje}`;
        consumirApi(findByNameUrl)
    }, [nombrePersonaje]);

    const consumirApi = async (url) => {
        setLoading(true);

        try {
            const res = await fetch(url);

            if (!res.ok) {
                return Swal.fire({
                    title: 'Error!',
                    text: 'Personaje no encontrado',
                    icon: 'error',
                });
            }

            const datos = await res.json()
            console.log(datos.results)
            setPersonajes(datos.results);

            setInfo(datos.info);

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false);
        }
    };

    const onPrevius = () => {
        consumirApi(info.prev)
    }

    const onNext = () => {
        consumirApi(info.next)
    }

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <Paginacion info={info} onPrevius={onPrevius} onNext={onNext} />
            <div className="row mt-2">
                {
                    personajes.map(p => (
                        <Personaje key={p.id} personaje={p} />
                    ))
                }
            </div>
            <Paginacion info={info} onPrevius={onPrevius} onNext={onNext} />
        </>
    )
};

export default Renderizar;