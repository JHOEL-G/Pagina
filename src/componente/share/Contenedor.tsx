interface ContenedorProps {
    children: React.ReactNode;
    className?: string;
}

export const Contenedor = ({ children, className = '' }: ContenedorProps) => {
    return (
        <div className={`mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 ${className}`}>
            {children}
        </div>
    );
};