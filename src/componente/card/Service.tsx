import type React from "react"
import { Contenido } from "../share/Contenido"

interface ServiceProps {
    titulo: string
    descripcion: string
    icon: React.ReactNode
}

export const Service = ({ titulo, descripcion, icon }: ServiceProps) => {
    return (
        <div className="p-5 sm:p6 lg:p-8 rounded-3xl border border-box-border bg-box-bg shadow-lg shadow-box-shadow relative overflow-hidden">
            <div className="rounded-xl bg-body p-3 text-heading-1 w-12 h-12 flex items-center justify-center relative">{icon}</div>
            <div className="mt-6 space-y-4 relative">
                <h2 className="text-lg md:text-xl font-semibold text-heading-2">{titulo}</h2>
                <Contenido>
                    {descripcion}
                </Contenido>
            </div>
        </div>
    )
}