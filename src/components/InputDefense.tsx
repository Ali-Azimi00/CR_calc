"use client";
import React from 'react'
// import Dropdown from './Dropdown'

interface InputFieldProps {
    leftLabel: string,
    rightLabel: string
}

const InputDefense: React.FC<InputFieldProps> = ({ leftLabel, rightLabel }) => {
    return (
        <div>
            <div className='flex flex-wrap text-black mt-4
                    justify-center 
                    md:justify-around 
                    gap-1'>
                <div className='w-full'>
                    <div className=' flex justify-between
                            '>
                        <div className='bg-gray-400  w-full text-center'>
                            {leftLabel}
                        </div>
                        <div className='bg-gray-300 w-full text-center'>
                            {rightLabel}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default InputDefense