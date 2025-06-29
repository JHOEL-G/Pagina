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
                    <Titulo>LOS SERVICIOS DE LA IA</Titulo>
                    <Contenido>
                        todo sobre las que es la ia de la inteligencia artificail
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
