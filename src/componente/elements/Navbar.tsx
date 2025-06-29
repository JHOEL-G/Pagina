import useTema from "../../store/Tema";
import { navItems } from "../../utils/navrItems";
import { BtnLink } from "../share/BtnLink";
import { Contenedor } from "../share/Contenedor";
import { NavItem } from "../share/NavItem";

export const Navbar = () => {
    const { toggleTema, tema } = useTema();
    return (
        <header className="absolute inset-x-0 top-0 z-50 py-6">
            <Contenedor>
                <nav className="w-full flex justify-between gap-6 relative">
                    <div className="min-w-max inline-flex relative">
                        <a href="/" className="relative flex items-center gap-3">
                            <img src="/src/assets/img.png" alt="logo" className="w-10 h-10" />
                            <div className="inline-flex text-2xl font-semibold text-heading-1">
                                MASTER
                            </div>
                        </a>
                    </div>
                    <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden">
                        <ul className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-heading-2 w-full lg:justify-center lg:items-center">
                            {navItems.map((item, key) => (
                                <NavItem href={item.href} key={key}>
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </NavItem>
                            ))}
                        </ul>
                        <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-box-border lg:border-0 px-6 lg:px-0">
                            <BtnLink text='Get Stared' href='#cta' className="" />
                        </div>
                    </div>
                    <div className="min-w-max flex items-center gap-x-3">
                        <button
                            onClick={toggleTema}
                            className="outline-none flex relative text-heading-2 rounded-full p-2 lg:p-3 border border-box-border cursor-pointer"
                        >
                            {tema === "dark" ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 
        6.364l-1.591-1.591M12 18.75V21m-6.364-2.636l1.591-1.591M3 
        12h2.25m.386-6.364l1.591 1.591M12 
        15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.752 15.002A9.718 9.718 0 0112.003 
        21c-5.385 0-9.75-4.365-9.75-9.75 0-4.04 
        2.444-7.498 5.948-9.037a0.75 0.75 0 01.976.937 
        7.5 7.5 0 007.635 9.865 0.75 0.75 0 01.94.986z"
                                    />
                                </svg>
                            )}
                        </button>

                    </div>
                </nav>
            </Contenedor>
        </header>
    )
}
