import { services } from "../../utils/services"
import { Service } from "../card/Service"
import { Contenedor } from "../share/Contenedor"
import { Contenido } from "../share/Contenido"
import { Titulo } from "../share/Titulo"

export const Services = () => {
    return (
        <section id="service">
            <Contenedor className="space-y-10 md:space-y-12">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <Titulo>Nuestros Servicios de Inteligencia Artificia</Titulo>
                    <Contenido>
                        Descubre cómo nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 pl-2">soluciones de Inteligencia Artificial</span> pueden transformar tu empresa. Desde la automatización de procesos hasta el análisis de datos avanzado y la creación de experiencias personalizadas, te ayudamos a innovar y crecer. {/* Contenido actualizado */}
                    </Contenido>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, key) => (
                        <Service key={key} titulo={service.titulo} descripcion={service.descripcion} icon={service.icon} />
                    ))
                    }
                </div>
            </Contenedor>
        </section>
    )
}
