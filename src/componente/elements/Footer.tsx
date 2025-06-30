import { navItems } from "../../utils/navrItems"
import { Contenedor } from "../share/Contenedor"
import { NavItem } from "../share/NavItem"

export const Footer = () => {
    return (
        <footer className="relative pt-28 rounded-t-3xl bg-box-bg">
            <Contenedor className="pb-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-3 mb-4 md:mb-0">
                        <img src="logos/img.png" alt="logo" className="w-7 h-7" />
                        <span className="text-lg font-semibold text-heading-1">TIENDA</span>
                    </div>
                    <ul className="flex gap-6 text-heading-1">
                        {navItems.map((item, key) => (
                            <NavItem key={key} href={item.href} text={item.text} />
                        ))}
                    </ul>
                </div>
                <div className="mt-6 text-center pl-[980px] text-sm text-heading-2">
                    © {new Date().getFullYear()} Todos los derechos reservados.
                </div>
            </Contenedor>
        </footer>
    )
}
