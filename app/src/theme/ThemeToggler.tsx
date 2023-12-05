"use client";

import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import { 
    SunMedium, 
    Moon, 
    SunMoon, 
} from 'lucide-react';


const ThemeToggler : React.FC = () => {
    const [mounted, setMounted] = useState<boolean>(false);
    const {theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <div>
            {/* <button onClick={() => setTheme("system")}>
                <SunMoon size={20}/>
            </button> Si présent afficher la possibilité d'utiliser le système par défaut de l'utilisateur */}
            {/* <button 
                onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light")
                }}
            >
                <SunMedium size={20} />
                <Moon size={20} />
            </button> */}
            <fieldset>
                {/* <legend className="sr-only">
                    Thèmes
                </legend> */}
                <div className="border border-black rounded p-4">
                    <input id="theme_system" className="border border-black rounded p-4" type="radio" name="system" value="system" />
                    <label htmlFor="theme_system" className="border border-black rounded p-4">
                        <SunMoon size={20}/> Par défaut
                    </label>
                </div>
            </fieldset>
        </div>
    );
};

export default ThemeToggler;