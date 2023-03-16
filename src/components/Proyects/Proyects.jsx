import React from 'react';
import {AiOutlineGithub,AiOutlineLink} from 'react-icons/ai'
export const Proyects = ({item}) => {
    return (
        <div  className="flex flex-col md:w-1/4 border-b items-center rounded-xl mt-20 mx-16 md:mx-0 ">
            <div>
            <img className='rounded-t-xl -z-10' src={`./img/${item.img}`}  alt="Imagen de proyecto"/>
            </div>
            <h4 className=' font-sans py-2 text-lg font-extralight'>{item.nombre}</h4>
            <h5 className=' font-sans pb-2 text-xs opacity-80 font-extralight'>{item.tipo}</h5>

            <div className='flex w-full justify-evenly pb-4'>
               <a href={item.linkGit}> <AiOutlineGithub className='text-3xl opacity-80 hover:opacity-100'/></a>
               <a href={item.link}> <AiOutlineLink className='text-3xl opacity-80 hover:opacity-100'/></a>
            </div>
            
        </div>
    );
}

