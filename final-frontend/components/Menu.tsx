"use client"

import { Popover, Transition } from "@headlessui/react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { Fragment } from "react"

const dropDownOptions = [
    {title: "Home", href: "/"},
    {title: "About", href: "/about"}
]

export default function Menu(){
    return(
        <Popover className="relative">
        {({ open }) => (
            <>
            <Popover.Button className="focus:outline-none">
                <div className="flex gap-x-1">
                    <h2>Pages</h2>
                    <ChevronDown className="w-4"/>
                </div>
            </Popover.Button>
            <Transition
            as={Fragment}
            enter="Transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="bg-violet-100 right-0.5 down-1 absolute p-2 w-20 flex justify-center">
                    <div>
                        <div>
                            {dropDownOptions.map((option) => (
                                <Link key={option.title} href={option.href}>
                                    <p className="md:text-lg">{option.title}</p>
                                    <hr/>
                                </Link>
                            ))}
                        </div>
                    </div>
                </Popover.Panel>
            </Transition>
            </>
        )}
    </Popover>
    )

}