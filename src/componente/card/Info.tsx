import type React from "react"
import { Contenido } from "../share/Contenido"

interface InfoProps {
    titulo: string
    descripcion: string
    children?: React.ReactNode
}


export const Info = ({ titulo, descripcion, children }: InfoProps) => {
    return (
        <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden">
            <div className="rounded-xl bg-body dark:bg-gray-950 p-3 text-heading-1 w-max relative">{children}</div>
            <h2 className="text-heading-2 w-max relative font-semibold md:text-xl">{titulo}</h2>
            <Contenido>{descripcion}</Contenido>
        </div>
    )
}
