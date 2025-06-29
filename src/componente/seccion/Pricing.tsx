import { pricing } from "../../utils/pricing"
import { Buton } from "../share/Buton"
import { Contenedor } from "../share/Contenedor"
import { Contenido } from "../share/Contenido"
import { Titulo } from "../share/Titulo"

export const Pricing = () => {
    return (
        <section id="pricing" className="py-5">
            <Contenedor className="text-center">
                <Titulo>Nuestras Soluciones de IA</Titulo>
                <Contenido className="mt-4">
                    Descubre nuestras opciones flexibles diseñadas para adaptarse a tus necesidades. Ya sea para un proyecto individual, una startup en crecimiento o una empresa consolidada. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 pl-2">Tenemos el plan ideal para llevar tu iniciativa con Inteligencia Artificial al siguiente nivel.</span>
                </Contenido>
            </Contenedor>
            <Contenedor className="mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricing.map((plan, key) => (
                        <div key={key} className="relative group h-full ">
                            <div className="bg-gradient-to-r from-blue-600 to-violet-700 p-1 rounded-3xl h-full">
                                <div className="bg-box-bg border border-box-border rounded-3xl shadow-lg shadow-box-shadow p-8 flex flex-col h-full relative">
                                    {plan.bestValue && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-700">
                                            MÁS POPULAR
                                        </div>
                                    )}

                                    {plan.mostPopular && (
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-700">
                                            MEJOR VALOR
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-semibold text-heading-1">{plan.titulo}</h3>
                                    <p className="mt-4 text-4xl font-bold text-heading-1">{plan.price}</p>
                                    <ul className="mt-6 flex-1 space-y-3 text-left text-heading-3">
                                        {plan.facturas.map((factura, keyFactura) => (
                                            <li key={keyFactura} className="flex items-center gap-2">
                                                <span className="text-primary">✔️</span>
                                                <span>{factura}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8">
                                        <Buton className="w-full transform transition-transform duration-300 hover:scale-105 hover:bg-blue-700">TODO EL PLAN</Buton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Contenedor>
        </section>
    )
}
