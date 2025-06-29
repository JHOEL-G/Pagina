import { Buton } from "../share/Buton"
import { Contenedor } from "../share/Contenedor"
import { Contenido } from "../share/Contenido"


export const Accion = () => {
    return (
        <section className="pb-20 relative">
            <Contenedor>
                <div className="relative rounded-2xl overflow-hidden">
                    <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10 px-6 md:px-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
                            TODO LA IA <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">LA IA</span> BONUS
                        </h1>
                        <Contenido className="pt-10">
                            EN LA ERA DE LOS DINOSAURIOS NO EXISTIA LA IA AHORA SI
                        </Contenido>
                        <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
                            <Buton>MAS INFORMACION</Buton>
                        </div>
                    </div>
                </div>
            </Contenedor>
        </section>
    )
}
