import React from 'react';

const AboutMe = () => {
    return (
        <div id='aboutMe' className='bg-black text-white font-mono flex flex-col items-center gap-12'>
        <h3 className='text-xl'>About Me </h3>
        <div className='flex flex-col  md:flex-row-reverse'>
            <div className='md:w-1/2 mt-0 m-16 md:m-20'>
                <img className=' rounded-sm' src="./img/yo.png" alt="foto de Leandro" />
            </div>
            <div className='md:w-1/2 flex flex-col m-16 md:m-20 mt-0 tracking-wide leading-loose text-start '>
                
                <p>Hi there I am <b> Leandro Franco</b>👋 <br /> Junior <b> Frontend Developer</b> 💻 currently actively looking for a <b>job.</b> <br />I am a <b>proactive, disciplined and passionate</b>  person in everything I do 🧠 . <br /> I always try to incorporate new knowledge every day 🤓  <br /> Today I am studying backend programming with Js 📚 and doing a team project in <a href="https://www.nocountry.tech/"><b>NoContry</b></a> 👨‍💻 </p>
                <b className='mt-10 mb-4'>My studies:</b>
                <a href="https://www.coderhouse.es/certificados/62cef10568a396001923b533" className='mb-2 rounded-md p-2 transition-colors hover:bg-[#8888889b]'><div className='flex items-center font-sans text-xs  transition-colors'><img className='mr-4 w-12' src="./img/coderimg.jpeg" alt="coder house" /> <div className='flex flex-col npm gap-3'> <b className='mr-2'> Web development</b> <p>Coder House - June 21, 2022 </p></div>   </div></a>
                <a href="https://www.udemy.com/certificate/UC-e9a830c5-eecb-4466-8157-ac0fd46a569d/" className='mb-2 rounded-md p-2 transition-colors hover:bg-[#8888889b]'><div className='flex items-center font-sans text-xs  transition-colors'><img className='mr-4 w-12' src="./img/udemy.jpeg" alt="coder house" /> <div className='flex flex-col gap-3'><b className='mr-2'>Java Script</b>  <p> Udemy - Jan 13, 2023</p> </div>  </div></a>
                <a href="https://www.coderhouse.com/certificados/6362e2d16784b8000f820d54" className='mb-2 rounded-md p-2 transition-colors hover:bg-[#8888889b]'><div className='flex items-center font-sans text-xs  transition-colors'><img className='mr-4 w-12' src="./img/coderimg.jpeg" alt="coder house" /><div className='flex flex-col gap-3'><b className='mr-2'> Java Script</b> <p>Coder House - August 23, 2022</p> </div>   </div></a>
                <a href="https://www.coderhouse.es/certificados/62cef10568a396001923b533" className='mb-2 rounded-md p-2 transition-colors hover:bg-[#8888889b]'><div className='flex items-center font-sans text-xs  transition-colors'><img className='mr-4 w-12' src="./img/coderimg.jpeg" alt="coder house" /> <div className='flex flex-col gap-3'><b className='mr-2'> React Js</b>  <p> Coder House - March 01, 2023</p> </div>  </div></a>
                <a href="#" className='mb-2 rounded-md p-2 transition-colors hover:bg-[#8888889b]'><div className='flex items-center font-sans text-xs  transition-colors'><img className='mr-4 w-12' src="./img/coderimg.jpeg" alt="coder house" /> <div className='flex flex-col gap-3'> <b className='mr-2'> Back End</b> <p>Coder House - At the moment</p></div></div></a>
            </div>
        </div>
        </div>
    );
}

export default AboutMe;
