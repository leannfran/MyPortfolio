import { useState, useEffect } from 'react';
import { ProyectsList } from '../ProyectsList/ProyectsList';

const ProyectsListContainer = () => {
    const [proyectos, setProyectos] = useState([]);
    useEffect(() => {
    fetch('./json/proyects.json')
        .then(response => response.json())
        .then(proyects => {
            console.log(proyects);
            const proyectsList = ProyectsList({proyects})
            console.log(proyectsList);
            setProyectos(proyectsList)
        })
    }, []);
    return (
        <div>
            {proyectos}
        </div>
    );
}

export default ProyectsListContainer;
