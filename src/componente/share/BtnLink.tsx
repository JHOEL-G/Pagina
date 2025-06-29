interface BtnLinkProps {
    href: string;
    text: string;
    className?: string;
}

export const BtnLink = ({ href, text, className = '' }: BtnLinkProps) => {
    return (
        <a
            href={href}
            className={`
                px-6 py-3 rounded-full outline-none relative overflow-hidden border
                bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900
                text-white cursor-pointer transform hover:scale-102 transition-transform duration-200
                ${className}
            `}
        >
            <span className="relative z-10">{text}</span>
        </a>
    );
};
