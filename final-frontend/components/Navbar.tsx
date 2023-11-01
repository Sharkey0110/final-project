import Link from "next/link"
import Menu from "./DropdownMenu"

export default function Navbar(){
    return(
        <nav className="flex justify-between px-4 md:px-8 h-12 bg-pink-200 items-center">
            <div>
                <h1 className="font-extrabold text-lg text-orange-400">Jack Sharkey</h1>
            </div>

            <div className="flex items-center md:hidden">
                <Menu />
            </div>

            <div className="hidden md:flex gap-x-10 font-extrabold text-white">
                <Link className="hover:underline" href="/">Projects</Link>
                <Link className="hover:underline" href="/about">About</Link>
            </div>

        </nav>
    )
}