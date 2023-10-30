import { Fragment } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { BsCheck2 } from "react-icons/bs"
import { HiChevronUpDown } from "react-icons/hi2"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

interface SelectProps {
  list: string[]
  img: boolean
  selected?: string
  setSelected: (value: string) => void
}

export default function Select({ list, img = false, selected, setSelected }: SelectProps) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className='relative ml-6'>
            <Listbox.Button className='relative w-full cursor-pointer h-10 border-2 bg-white py-1.5 pl-3 pr-10 text-left text-textColor rounded focus:outline-none '>
              <span className='flex items-center'>
                {img && <img src={selected?.avatar} alt='' className='h-5 w-5 flex-shrink-0 rounded-full' />}
                <span className='ml-3 text-sm block truncate'>{selected?.name}</span>
              </span>
              <span className='pointer-events-none text-xl absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
                <HiChevronUpDown />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-[#fafafa] py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm '>
                {list.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-[#f5f5f5] text-opacity-75" : "text-textColor",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className='flex items-center'>
                          {img && <img src={person?.avatar} alt='' className='h-5 w-5 flex-shrink-0 rounded-full' />}
                          <span
                            className={classNames(selected ? "font-semibold" : "font-normal", "ml-3 block truncate")}
                          >
                            {person?.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-textColor" : "text-primary",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <BsCheck2 />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
