import { useState, useEffect } from 'react';
import ProyectsList  from '../ProyectsList/ProyectsList';

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
        <div id='proyects' className='bg-black text-white font-mono flex flex-col justify-star items-center min-h-[80vh]'>
            <h3 className='text-xl'>Proyects</h3>
            <div className='flex flex-col md:flex-row justify-evenly  gap-1 flex-wrap mb-20'>
            {proyectos}
            </div>
        </div>
    );
}

export default ProyectsListContainer;
