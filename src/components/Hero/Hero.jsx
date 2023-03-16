import Typed from 'typed.js'
import { useEffect,useRef } from 'react';
const Hero = () => {
	const first = useRef(null);
        const second = useRef(null);
        const last = useRef(null);

        const typed = useRef(null);
        const typeD = useRef(null);
        const typED = useRef(null);

        
        //'Leandro Franco','and i am Front-End developer.'
       // strings: ["Hello 👋, my name is"], // Strings to display
        useEffect(() => {
            const options = {
                strings: [
                "Hello 👋, my name is"
              
              ],
              typeSpeed: 100,
              backSpeed: 50,
            };
            
            // elRef refers to the <span> rendered below
            typed.current = new Typed(first.current, options);
            
            return () => {
              // Make sure to destroy Typed instance during cleanup
              // to prevent memory leaks
              typed.current.destroy();
            }
          }, [])
          useEffect(() => {
            const options = {
                strings: [
                    'Leandro Franco'
              
              ],
              typeSpeed: 100,
              backSpeed: 50,
              startDelay: 3100,
            };
            
            // elRef refers to the <span> rendered below
            typeD.current = new Typed(second.current, options);
            
            return () => {
              // Make sure to destroy Typed instance during cleanup
              // to prevent memory leaks
              typeD.current.destroy();
            }
          }, [])

          useEffect(() => {
            const options = {
                strings: [
                    'and i am Front-End developer.'
              
              ],
              typeSpeed: 100,
              backSpeed: 50,
              startDelay: 5300,

            };
            
            // elRef refers to the <span> rendered below
            typED.current = new Typed(last.current, options);
            
            return () => {
              // Make sure to destroy Typed instance during cleanup
              // to prevent memory leaks
              typED.current.destroy();
            }
          }, [])
        
        return (
        <div id='home' className="flex flex-col items-center justify-center min-h-screen bg-black gap-2 font-mono text-white ">
                 <div className="type-wrap">
                     <span style={{ whiteSpace: 'pre' }} ref={first} />
                 </div>
                 <div className="type-wrap">
                     <span className='text-3xl md:text-5xl text-center' style={{ whiteSpace: 'pre' }} ref={second} />
                 </div>
                 
                 <div className="type-wrap">
                     <span style={{ whiteSpace: 'pre' }} ref={last} />
                 </div>
            
        </div>
    );
}

export default Hero;
