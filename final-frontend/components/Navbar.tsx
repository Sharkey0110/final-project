import Link from "next/link"
import Menu from "./Menu"

export default function Navbar(){
    return(
        <nav className="flex justify-between px-4 md:px-8 h-12 bg-slate-100 items-center">
            <div>
                <h1 className="font-extrabold text-lg text-yellow-600">Jack Sharkey</h1>
            </div>

            <div className="flex items-center md:hidden">
                <Menu />
            </div>

            <div className="hidden md:flex gap-x-10 font-semibold">
                <Link href="/">Projects</Link>
                <Link href="/about">About</Link>
            </div>

        </nav>
    )
}