import { Buton } from "../share/Buton"
import { Contenedor } from "../share/Contenedor"
import { Contenido } from "../share/Contenido"
import { Numero } from "./Numero"

export const Hero = () => {
    return (
        <section className="relative pt-32 lg:pt-36">
            {''}
            <Contenedor className="flex flex-col lg:flex-row gap-10 lg:gap-12">
                <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
                    <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r from-blue-700 to-violet-700 blur-xl opacity-60 lg:opacity-95 lg:block hidden">
                    </span>
                    <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl opacity-80">
                        {''}
                    </span>
                </div>
                <div className="relative flex flex-col items-center text-center lg:text-left lg:py-8 lg:items-start lg:max-w-none max-w-3xl  mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
                    <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
                        Hola Mundo
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-violet-700 ml-2">
                            HOLA A TODOS
                        </span>
                    </h1>
                    <Contenido className="mt-5">
                        <p>Empowering Ideas Through Code and AI.</p>
                        <p>I’m a passionate developer building modern, scalable, and intelligent web experiences. From responsive frontends to robust backends and AI-driven features, I turn ideas into high-impact digital products.</p>
                        <p>Let’s build the future, one line of code at a time.</p>
                    </Contenido>

                    <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
                        <div className="flex sm:flex-row flex-col gap-5 w-full">
                            <form action="#" className="py-1 pl-6 w-full pr-1 flex gap-3 items-center text-heading-3 shadow-lg shadow-box-shadow border border-box-border bg-box-bg rounded-full ease-linear focus-within:bg-body focus-within:border-primary">
                                <span className="min-w-max pr-2 border-r border-box-border ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mails-icon lucide-mails"><rect width="16" height="13" x="6" y="4" rx="2" /><path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" /><path d="M2 8v11c0 1.1.9 2 2 2h14" /></svg>
                                </span>
                                <input type="email" placeholder="juan@gmail.com" className="w-full py-3 outline-none bg-transparent" />
                                <Buton
                                    className="min-w-max text-white"
                                    onClick={() => console.log("Subscribed!")}
                                    aria-label="Subscribe"
                                >
                                    <span className="relative z-[5]">
                                        Subscribe
                                    </span>
                                </Buton>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:max-0 mx-auto max-w-3xl">
                    <img src="/logos/img.png" alt="imagen" width={2350} height={2359} className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96" />
                </div>
            </Contenedor>
            <Numero />
        </section>
    )
}
