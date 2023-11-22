"use client";

import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";


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
            <button onClick={() => setTheme("light")}>Light</button>
            <button onClick={() => setTheme("dark")}>Dark</button>
        </div>
    );
};

export default ThemeToggler;