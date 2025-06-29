interface ContenidoProps {
    children: React.ReactNode;
    className?: string;
}

export const Contenido = ({ children, className = '' }: ContenidoProps) => {
    return (
        <div className={`text-heading-3 md:text-lg ${className}`}>
            {children}
        </div>
    );
};