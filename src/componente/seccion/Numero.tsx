import { Contenedor } from "../share/Contenedor"

export const Numero = () => {
    return (
        <section className="relative mt-12 md:mt-16">
            <Contenedor className="flex justify-center items-center">
                <div className="mx-auto lg:mx-0 p-4 sm:p-6 sm:py-8 max-w-6xl rounded-3xl bg-box-bg border border-box-border shadow-lg shadow-box-shadow grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 sm:gap-y-10">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="text-center px-3 sm:px-4">
                            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-heading-1">100+</h2>
                            <p className="mt-2 text-sm sm:text-base text-heading-3">MODELOS DE IA IMPLEMENTADOS</p>
                        </div>

                    ))}
                </div>
            </Contenedor>
        </section>
    )
}
