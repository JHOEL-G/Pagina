import { Info } from "../card/Info"
import { Contenedor } from "../share/Contenedor"
import { Contenido } from "../share/Contenido"
import { Titulo } from "../share/Titulo"
import { AiOutlineBulb, AiOutlineEye, AiOutlineRocket } from "react-icons/ai";

export const AbautMe = () => {
    return (
        <section id="abautme" className="py-12 px-4 sm:px-6 lg:px-8">
            <Contenedor className="flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-16">
                <div className="w-full md:w-7/12 flex flex-col text-center md:text-left">
                    <Titulo>Descubre el Mundo de la Inteligencia Artificial</Titulo>
                    <Contenido className="p-2">
                        Aprende sobre la capacidad de las computadoras para ver y procesar imágenes del mundo real, desde el reconocimiento facial hasta los vehículos autónomos.
                    </Contenido>
                    <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Info
                            titulo="NUESTRA MISIÓN"
                            descripcion="Empoderar a empresas y personas con soluciones de inteligencia artificial innovadoras que impulsen el progreso y la eficiencia en un mundo en constante evolución."
                        >
                            <AiOutlineRocket />
                        </Info>
                        <Info
                            titulo="NUESTRA VISIÓN"
                            descripcion="Ser líderes reconocidos en el desarrollo de IA, creando un futuro donde la tecnología y la humanidad coexistan para resolver los desafíos más complejos de la sociedad."
                        >
                            <AiOutlineEye />
                        </Info>
                        <Info
                            titulo="INNOVACIÓN CONSTANTE"
                            descripcion="Nos comprometemos con la ética, la transparencia y la excelencia en cada solución de IA, garantizando un impacto positivo y sostenible en todos nuestros proyectos."
                        >
                            <AiOutlineBulb />
                        </Info>
                    </div>
                </div>

                <div className="w-full md:w-5/12">
                    <div className="w-full h-64 sm:h-80 md:h-96 relative">
                        <img
                            src="/logos/img.png"
                            alt="abautme"
                            className="w-full h-full object-cover rounded-3xl shadow-lg"
                        />
                    </div>
                </div>
            </Contenedor>
        </section>
    );
};
