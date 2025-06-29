import type React from "react";
import { Navbar } from "./elements/Navbar";
import { Footer } from "./elements/Footer";
import { useEffect } from "react";

interface InicioProps {
    titulo: string;
    children: React.ReactNode;
}


export const Inicio = ({ titulo, children }: InicioProps) => {
    useEffect(() => {
        document.title = titulo;
    }, [titulo]);

    return (
        <>
            <Navbar />
            <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
                {children}
            </main>
            <Footer />
        </>
    )
}
