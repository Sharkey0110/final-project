import Link from "next/link"
import Menu from "./Menu"

export default function Navbar(){
    return(
        <nav className="flex justify-between px-4 h-12 bg-slate-100 items-center">
            <div>
                <h1>Jack Sharkey</h1>
            </div>

            <div className="flex items-center md:hidden">
                <Menu />
            </div>

        </nav>
    )
}