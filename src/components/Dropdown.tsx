'use client'; // if using Next.js 13+ with app directory

import { useState } from 'react';

type DropdownOption = {
    label: string;
    // href?: string;
    // onClick?: () => void;
};

type DropdownProps = {
    options: DropdownOption[];
};

export default function Dropdown({ options }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [selection, setSelection] = useState('Select')

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div className='h-6 '>
            <div className="relative text-left ">

                <button
                    onClick={toggleDropdown}
                    className='px-2 text-sm flex justify-center pt-0.5 h-6 w-full
                text-black bg-white text-center
                hover:bg-gray-200 
                 hover:text-sm hover:cursor-pointer 
                 '
                //    border-3 border-double border-white

                >
                    {selection}
                    <svg
                        className="w-5 h-5   "
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>

                {isOpen && (
                    //change left-0 to adjust dropdown box position
                    <div className="absolute left-0 
                z-10 mt-2 w-full origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                            {options.map((option, idx) => (
                                <a
                                    key={idx}
                                    // href={option.href || "#"}
                                    // onClick={option.onClick}
                                    onClick={() => { toggleDropdown(); setSelection(option.label) }}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-100 hover:cursor-pointer"
                                >
                                    {option.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
