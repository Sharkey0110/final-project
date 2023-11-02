"use client"

import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Tag } from '@/sanity/sanityUtils'

export interface FilterProps{
    tags: Array<Tag>
}

export default function Filter({ tags }: FilterProps) {
  const [selected, setSelected] = useState(tags[0])
  const router = useRouter();

  function updateParams(e: {_id: string}){
    const searchParams = new URLSearchParams(window.location.search);
    if(e._id == "c2399e6b-a0e6-4dca-bcb0-ea737ce0b77b"){
        searchParams.delete("tag")
    } else{
        searchParams.set("tag", e._id);
    }
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    router.push(newPathName)
  }

  return (
    <div>
      <Listbox value={selected} onChange={(e) => {setSelected(e); updateParams(e)}}>
        <div className="relative w-48 z-10">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selected.tag}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDown />

            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {tags.map((tag: Tag) => (
                <Listbox.Option
                  key={tag._id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                    }`
                  }
                  value={tag}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {tag.tag}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">

                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
