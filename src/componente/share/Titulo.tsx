interface TituloProps {
    children: React.ReactNode;
}

export const Titulo = ({ children }: TituloProps) => {
    return (
        <h1 className="text-center text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl">
            {children}
        </h1>
    );
};