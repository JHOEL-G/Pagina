import { Info } from "../card/Info"
import { Contenedor } from "../share/Contenedor"
import { Contenido } from "../share/Contenido"
import { Titulo } from "../share/Titulo"
import { AiOutlineBulb, AiOutlineEye, AiOutlineRocket } from "react-icons/ai";

export const AbautMe = () => {
    return (
        <section id="abautme">
            <Contenedor className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
                <div className="w-full md:w-5/12 lg:w-1/2">
                    <div className="w-full h-80 sm:h-96 relative">
                        <img src="/logos/img.png" alt="abautme" className=" w-full h-full object-cover rounded-3xl shadow-lg relative z-10" />
                    </div>
                </div>
                <div className="w-full md:w-7/12 lg:1/ flex flex-col">
                    <Titulo> Descubre el Mundo de la Inteligencia Artificia </Titulo>
                    <Contenido className="p-2">
                        Aprende sobre la capacidad de las computadoras para ver y procesar imágenes del mundo real, desde el reconocimiento facial hasta los vehículos autónomos                    </Contenido>
                    <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
                        <Info titulo="NUESTRA MISIÓN" descripcion="Empoderar a empresas y personas con soluciones de inteligencia artificial innovadoras que impulsen el progreso y la eficiencia en un mundo en constante evolución.">
                            <AiOutlineRocket />
                        </Info>
                        <Info titulo="NUESTRA VISIÓN" descripcion="Ser líderes reconocidos en el desarrollo de IA, creando un futuro donde la tecnología y la humanidad coexistan para resolver los desafíos más complejos de la sociedad.">
                            <AiOutlineEye />
                        </Info>
                        <Info titulo="INNOVACIÓN CONSTANTE" descripcion="Nos comprometemos con la ética, la transparencia y la excelencia en cada solución de IA, garantizando un impacto positivo y sostenible en todos nuestros proyectos.">
                            <AiOutlineBulb />
                        </Info>
                    </div>
                </div>
            </Contenedor>
        </section>
    )
}
