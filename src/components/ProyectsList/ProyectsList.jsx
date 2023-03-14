import React from 'react';
import { Proyects } from '../Proyects/Proyects'

const ProyectsList = ({proyects}) => {
    return (
        <>
                { proyects.map(proyecto => <Proyects item={proyecto} key={proyecto.id}/>)}
        </>
    );
}

export default ProyectsList;
