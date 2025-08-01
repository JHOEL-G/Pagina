interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

export const Buton = ({ onClick, children, className = '' }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`px-6 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border border-transparent bg-violet-700 dark:bg-violet-700 text-white ${className}`}
        >
            {children}
        </button>
    );
};
