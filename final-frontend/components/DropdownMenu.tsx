"use client"

import { Popover, Menu, Transition, } from "@headlessui/react"
import { ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Fragment } from "react"

const dropDownOptions = [
    {title: "Projects", href: "/"},
    {title: "About", href: "/about"}
]

export default function DropdownMenu(){
    return(
        <Menu as="div" className="relative inline-block">
            <div>
                <Menu.Button className="flex justify-center">
                    <p>Pages</p>
                    <ChevronDown/>
                </Menu.Button>
            </div>
            <Transition
             enter="transition ease-out duration-100"
             enterFrom="transform opacity-0 scale-95"
             enterTo="transform opacity-100 scale-100"
             leave="transition ease-in duration-75"
             leaveFrom="transform opacity-100 scale-100"
             leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute bg-violet-100 p-3 top-2.5 right-px rounded-md">
                        {dropDownOptions.map((option) => (
                            <Menu.Item key={option.title}>
                                {({ active }) => (
                                    <div>
                                        <Link
                                        href={option.href}
                                        >
                                            {option.title}
                                        </Link>
                                    </div>
                                )}
                            </Menu.Item>
                        ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )


}