import { create } from "zustand";
import { persist } from "zustand/middleware";

type Tema = "light" | "dark";

interface TemaInterface {
  tema: Tema;
  toggleTema: () => void;
}

const useTema = create<TemaInterface>()(
  persist(
    (set, get) => ({
      tema:
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",

      toggleTema: () => {
        const nuevoTema = get().tema === "light" ? "dark" : "light";

        const body = document.body;
        if (nuevoTema === "dark") {
          body.classList.add("modo-oscuro");
          body.classList.remove("modo-claro");
        } else {
          body.classList.add("modo-claro");
          body.classList.remove("modo-oscuro");
        }

        set({ tema: nuevoTema });
      },
    }),
    {
      name: "tema",
      onRehydrateStorage: () => (state) => {
        const body = document.body;
        if (state?.tema === "dark") {
          body.classList.add("modo-oscuro");
        } else {
          body.classList.add("modo-claro");
        }
      },
    }
  )
);

export default useTema;
