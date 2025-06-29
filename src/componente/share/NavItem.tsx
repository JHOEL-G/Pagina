import type React from "react";

interface NavItemProps {
    href: string;
    text?: string;
    children: React.ReactNode
}

export const NavItem = ({ href, text, children }: NavItemProps) => {
    return (
        <li>
            <a href={href} className="duration-300 font-medium ease-linear hover:text-primary py-3">
                {text ? text : children}
            </a>
        </li>
    );
};