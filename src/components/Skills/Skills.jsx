import React from 'react';

const Skills = () => {
    return (
        <div id='skills'
        className='min-h-[60vh] flex flex-col justify-center items-center text-white font-mono bg-black'>
        <h2 className='text-xl my-20'>my skills 🚀</h2> 
        <div className='flex flex-wrap items-end justify-center gap-16 px-4 md:px-20 mb-20 '>

            <div className=' p-2 transition-colors hover:bg-[#8888889b] rounded-md max-w-[10vh] md:max-w-[17vh]  flex flex-col items-center  gap-2'><img src="./img/pngwing.com.png"alt="ReactJs" /><p>React Js</p></div>
            <div className=' p-2 transition-colors hover:bg-[#8888889b] rounded-md max-w-[10vh] md:max-w-[16vh] flex flex-col items-center  gap-2'><img src="./img/pngwing.com (11).png" alt="JavaScript" /><p>Java Script</p></div>
            <div className=' p-2 transition-colors hover:bg-[#8888889b] rounded-md max-w-[10vh] md:max-w-[17vh]   flex flex-col items-center  gap-2'><img src="./img/pngwing.com (12).png" alt="html" /><p>Html</p></div>
            <div className=' p-2 transition-colors hover:bg-[#8888889b] rounded-md max-w-[10vh] md:max-w-[17vh] flex flex-col items-center  gap-2'><img src="./img/pngwing.com (13).png" alt="css" /><p>Css</p></div>
            <div className=' p-2 transition-colors hover:bg-[#8888889b] rounded-md max-w-[10vh] md:max-w-[17vh]  flex flex-col items-center  gap-2'><img src="./img/pngwing.com (14).png" alt="Sass" /><p className=''>Sass</p></div>
            <div className=' p-2 transition-colors hover:bg-[#8888889b] rounded-md max-w-[10vh] md:max-w-[17vh] flex flex-col items-center  = gap-2'><img src="./img/pngwing.com (15).png" alt="Tailwind css" /><p>Tailwind Css</p></div>
            <div className=' p-2 transition-colors hover:bg-[#8888889b] rounded-md max-w-[10vh] md:max-w-[17vh] flex flex-col items-center  gap-2'><img src="./img/pngwing.com (16).png" alt="Material ui" /><p>Marerial ui</p></div>
            <div className=' p-2 transition-colors hover:bg-[#8888889b] rounded-md max-w-[10vh] md:max-w-[17vh] flex flex-col items-center  gap-2'><img src="./img/pngwing.com (17).png" alt="Bootstrap" /><p>Boostrap</p></div>
            <div className=' p-2 transition-colors hover:bg-[#8888889b] rounded-md max-w-[10vh] md:max-w-[17vh] flex flex-col items-center  gap-2'><img src="./img/pngwing.com (18).png" alt="FireBase" /><p>Fire Base</p></div>
            <div className=' p-2 transition-colors hover:bg-[#8888889b] rounded-md max-w-[10vh] md:max-w-[17vh] flex flex-col items-center  gap-2'><img src="./img/pngwing.com (19).png" alt="git" /><p>Git</p></div>
            <div className=' p-2 transition-colors hover:bg-[#8888889b] rounded-md max-w-[15vh] md:max-w-[20vh] flex flex-col items-center  gap-2'><img src="./img/github.png" alt="FireBase" /><p>Git Hub</p></div>
            <div className=' p-2 transition-colors hover:bg-[#8888889b] rounded-md max-w-[10vh] md:max-w-[17vh] flex flex-col items-center  gap-2'><img src="./img/pngwing.com (22).png" alt="FireBase" /><p>Vite </p></div>

        </div>


        </div>
    );
}

export default Skills;
