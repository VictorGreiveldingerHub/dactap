"use client";

import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import { SunMedium, Moon } from 'lucide-react';


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
            <button onClick={() => setTheme("system")}>System</button> {/* Si présent afficher la possibilité d'utiliser le système par défaut de l'utilisateur */}
            <button 
                onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light")
                }}
            >
                <SunMedium size={20} />
                <Moon size={20} />
            </button>
        </div>
    );
};

export default ThemeToggler;