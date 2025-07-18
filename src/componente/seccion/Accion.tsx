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
                            Explora las Posibilidades Infinitas de la IA <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 pl-4">¡Tu Futuro Comienza Ahora!
                            </span>  ¡Y Recibe Contenido Exclusivo!
                        </h1>
                        <Contenido className="pt-10">
                            En un mundo que evoluciona rápidamente, la IA es la clave para la innovación y el progreso. Descubre cómo esta tecnología está transformando industrias y redefiniendo nuestras vidas.
                        </Contenido>
                        <div className="mx-auto max-w-md sm:max-w-xl pt-10 dark:text-white">
                            <Buton className="  hover:bg-blue-900 transition">
                                <a
                                    href="https://cloud.google.com/learn/what-is-artificial-intelligence?hl=es-419"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" text-white px-4 py-2 rounded"
                                >
                                    EXPLORA LA IA AHORA
                                </a>
                            </Buton>
                        </div>
                    </div>
                </div>
            </Contenedor>
        </section>
    )
}
