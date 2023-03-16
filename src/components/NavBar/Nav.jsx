import { useState } from "react";
import { HiOutlineChevronLeft,HiOutlineChevronRight} from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineDownload} from "react-icons/ai";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className={`fixed flex flex-col bg-black bg-opacity-80 h-full w-[50%] md:w-[20%]  font-mono text-white 
      ${showMenu ? "left-0" :"-left-full"  } transition-all duration-300 z-10 border-r-2
      `}
      >
        <button onClick={()=> setShowMenu(!showMenu)} className="text-white ml-10 mt-8 text-2xl">
          <HiOutlineChevronLeft />
        </button>
        <nav className="text-flicker-in-glow flex  flex-col justify-between h-[100vh]" > 
          <ul className="flex flex-col justify-start gap-20 mt-10 ml-10">
            <li ><a className=" opacity-80 hover:opacity-100" href="#home"> home</a></li>
            <li ><a className=" opacity-80 hover:opacity-100" href="#proyects">proyects</a> </li>
            <li ><a className=" opacity-80 hover:opacity-100" href="#aboutMe"> about me</a></li>
            <li ><a className=" opacity-80 hover:opacity-100" href="#skills">skills</a></li>

          </ul>
          <div className="flex flex-col gap-4 mb-8 ml-10 ">

          <a href="https://github.com/leannfran"><AiFillGithub className="text-white text-3xl opacity-80 hover:opacity-100"/></a>
          <a href="https://www.linkedin.com/in/leandro-franco-bb9101245/"> <AiFillLinkedin className="text-white text-3xl opacity-80 hover:opacity-100"/> </a>
          <a download="Cv" href="./cvActualizado.pdf" className="flex items-center bg-black hover:bg-[#8888889b] border rounded-md p-1 max-w-fit"> <AiOutlineDownload className="text-white text-xl mr-1"/>Download Cv</a>
          </div>
        </nav>
      </header>
      <button 
      onClick={()=>setShowMenu(!showMenu)}
      className={`text-white ml-10 fixed mt-10 text-2xl ${showMenu ? "opacity-0":" opacity-100"}`}>
          <HiOutlineChevronRight className="text-flicker-in-glow text-flicker-in-glow"/>
    </button>
    </>
  );
};

export default Nav;
