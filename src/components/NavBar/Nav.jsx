import { useState } from "react";
import { HiOutlineChevronLeft,HiOutlineChevronRight} from "react-icons/hi";
const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <header className={`fixed flex flex-col bg-black bg-opacity-80 h-full w-2/6 md:w-[20%]  font-mono text-white 
      ${showMenu ? "left-0" :"-left-full"  } transition-all duration-300 z-10 border-r-2
      `}
      >
        <button onClick={()=> setShowMenu(!showMenu)} className="text-white ml-10 mt-8 text-2xl">
          <HiOutlineChevronLeft />
        </button>
        <nav>
          <ul className="flex flex-col justify-start gap-20 mt-10 ml-10">
            <li>home</li>
            <li><a href="#skills">skills</a></li>
            <li>proyects</li>
            <li>about me</li>
            <li>contact me</li>
          </ul>
        </nav>
      </header>
      <button 
      onClick={()=>setShowMenu(!showMenu)}
      className={` text-white ml-10 mt-10 text-2xl ${showMenu ? "hidden":" fixed"}`}>
          <HiOutlineChevronRight />
    </button>
    </>
  );
};

export default Nav;
