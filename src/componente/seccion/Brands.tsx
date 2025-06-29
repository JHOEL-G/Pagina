import { Contenido } from "../share/Contenido";
import { Titulo } from "../share/Titulo";

const logos = [
    "spotify",
    "google",
    "maicro",
    "netflix",
    "whasap",
    'pipal'
];

export const Brands = () => {
    return (
        <section>
            <Contenido className="space-y-8">
                <div className="text-center max-w-3xl mx-auto">
                    <Titulo>TODOS LOS LOGOS</Titulo>
                </div>
                <div className="flex justify-center flex-wrap gap-4">
                    {logos.map((logo, key) => (
                        <div
                            key={key}
                            className="p-4 sm:p-5 rounded-xl bg-body border border-box-border group"
                        >
                            <img
                                src={`/src/assets/logos/${logo}.png`}
                                width={100}
                                height={60}
                                alt={`${logo}`}
                                className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </Contenido>
        </section>
    );
};