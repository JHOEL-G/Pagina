interface ContenidoProps {
    children: React.ReactNode;
    className?: string;
}

export const Contenido = ({ children, className = '' }: ContenidoProps) => {
    return (
        <div className={`text-heading-3 md:text-lg mx-auto max-w-7xl px-4 sm:px-10 lg:px-8 ${className}`}>
            {children}
        </div>
    );
};