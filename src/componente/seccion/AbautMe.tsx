import { Info } from "../card/Info"
import { Contenedor } from "../share/Contenedor"
import { Contenido } from "../share/Contenido"
import { Titulo } from "../share/Titulo"
import { AiTwotoneThunderbolt } from "react-icons/ai";

export const AbautMe = () => {
    return (
        <section id="abautme">
            <Contenedor className="flex flex-col md:flex-row gap-10 lg:gap-12 items-center">
                <div className="w-full md:w-5/12 lg:w-1/2">
                    <div className="w-full h-80 sm:h-96 relative">
                        <img src="/src/logos/img.png" alt="abautme" className=" w-full h-full object-cover rounded-3xl shadow-lg relative z-10" />
                    </div>
                </div>
                <div className="w-full md:w-7/12 lg:1/ flex flex-col">
                    <Titulo> TODO SOBRE LA IA </Titulo>
                    <Contenido>
                        todo sobre la inteligencia artificial y como ayuda esta en el dia a dia
                    </Contenido>
                    <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
                        <Info titulo="MISION" descripcion="La inteligencia artificial ">
                            <AiTwotoneThunderbolt />
                        </Info>
                        <Info titulo="MISION" descripcion="La inteligencia artificial ">
                            <AiTwotoneThunderbolt />
                        </Info>
                        <Info titulo="MISION" descripcion="La inteligencia artificial ">
                            <AiTwotoneThunderbolt />
                        </Info>
                    </div>
                </div>
            </Contenedor>
        </section>
    )
}
