// Importer les fonts
import {
    Poppins,
    Signika
} from "next/font/google";

export const poppins = Poppins({
    subsets: ['latin'],
    weight: ["500"]
});

export const signika = Signika({
    subsets: ['latin']
});