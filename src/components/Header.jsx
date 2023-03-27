import { useEffect, useRef, useState } from "react";
import MoonIcon from "./icons/IconMoon";
import IconSun from "./icons/IconSun"


const inicialStateDarkMode = localStorage.getItem('theme') === 'dark';

const Header = () => {
    const [darkMode, setDarkmode] = useState(inicialStateDarkMode)
    
    const refHeader = useRef(null)

    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark')
        }else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light')
        }
    }, [darkMode])

    return (
        <header className="container mx-auto pt-8 md:max-w-xl"  ref={refHeader}>
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                    Todo
                </h1>
                <button onClick={() => setDarkmode(!darkMode)}>
                    {
                        darkMode ? <IconSun/> : <MoonIcon/> 
                    }
                </button>
            </div>
        </header>
    );
};

export default Header;
