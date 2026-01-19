import { NavLink } from "react-router-dom"
import Header from "@/components/HeaderComponent"
import type { ReactElement } from "react";

interface MainMenuProps {
    content: ReactElement[];
}

function MainMenu({ content }: MainMenuProps) {
    return (

        <div className="w-screen h-screen bg-lume-darker flex flex-col items-center gap-15">
            <Header />
            <div className="flex flex-col w-1/2 border-2 border-gray-700 p-10 rounded-2xl gap-10 bg-lume-dark">
                <h1 className="text-5xl text-lume-light text-center">Cole seu link longo aqui</h1>
                <form className="flex gap-4" action="">
                    <input type="text" className="w-full border border-gray-700 focus:outline-0 focus:ring-2 focus:ring-lume-bright rounded-lg p-4 bg-lume-dark text-gray-700"/>
                    <button className="bg-linear-to-r from-lume-secondary to-lume-bright hover:from-lume-primary hover:to-lume-light hover:scale-115 transition-duration-150 ease-in-out p-4 rounded-lg text-lume-darker text-2xl font-bold cursor-pointer">
                        Encurtar
                    </button>
                </form>
            </div>
            <div className="flex w-1/2 border-b-2 border-gray-700 gap-5">
                <NavLink
                    to="/links"
                    className={({ isActive }) =>
                    isActive ? "text-lume-bright text-3xl font-semibold p-4 cursor-pointer border-b-2 border-b-lume-bright" : "text-gray-700 text-3xl font-semibold p-4 cursor-pointer"
                    }
                >
                    Meus Links
                </NavLink>
                <NavLink
                    to="/stats"
                    className={({ isActive }) =>
                    isActive ? "text-lume-bright text-3xl font-semibold p-4 cursor-pointer border-b-2 border-b-lume-bright" : "text-gray-700 text-3xl font-semibold p-4 cursor-pointer"
                    }
                >
                    Estatísticas
                </NavLink>
            </div>
            <div className="flex flex-col gap-4 w-1/2">{content}</div>
        </div>
    )
}

export default MainMenu