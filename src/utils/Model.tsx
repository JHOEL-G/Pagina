import { navItems } from "./navrItems";
import useTema from "../store/Tema";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaRegSun } from "react-icons/fa";

function Model() {
    const { toggleTema, tema } = useTema();

    return (
        <nav
            className={`fixed bottom-5 left-1/2 -translate-x-1/2 
      ${tema === "dark" ? "bg-[#232225]/50 text-white" : "bg-white/40 text-black"} 
      backdrop-blur-md p-2 rounded-full shadow-lg 
      flex items-center justify-between 
      max-w-xl w-[95%] sm:w-auto z-50 transition-colors duration-300`}
        >
            <ul className="flex flex-wrap items-center gap-12 px-4 sm:gap-8">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <li key={item.href}>
                            <a
                                href={item.href}
                                className="flex items-center justify-center text-lg transition-colors duration-200"
                            >
                                <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                            </a>
                        </li>
                    );
                })}
            </ul>

            <button
                onClick={toggleTema}
                className="ml-3 sm:ml-4 p-2 sm:p-3 rounded-full flex items-center justify-center text-xl transition-colors duration-200"
                aria-label="Toggle theme"
            >
                {tema === "dark" ? <FaRegSun size={24} /> : <MdOutlineDarkMode size={24} />}
            </button>
        </nav>
    );
}

export default Model;
