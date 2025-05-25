import React from 'react'

interface InputFieldProps {
    placeholder?: string,
    individualStyles?: string
    value?: string
}

const InputAttributes: React.FC<InputFieldProps> = ({ placeholder, individualStyles, value }) => {


    return (

        <div className='text-black'>
            <div className='flex flex-row opacity-75  justify-end h-4 '>
                <div className='h-4 w-14 text-xs font-thin text-white pl-2'>
                    MOD
                </div>
                <div className='h-6 w-14 text-xs font-thin text-white pl-2'>
                    SAVE
                </div>
            </div>
            <div className='flex flex-row'>
                <div className={`h-6 w-14 bg-gray-400  px-2 ${individualStyles}`}>
                    {placeholder}
                </div>
                <input
                    className={`h-6 w-14 bg-gray-100    px-2 ${individualStyles}`}
                    placeholder={'00'}>
                </input>
                <div className={`h-6 w-14 bg-gray-400   px-2 ${individualStyles}`}>
                    00
                </div>

                <div className={`h-6 w-14 bg-gray-400   px-2 ${individualStyles}`}>
                    00
                </div>
            </div>

            <div className='flex flex-row  opacity-75  justify-end'>
                <div className={`bg-gray-400  h-5 w-24 px-2 rounded-bl-lg text-sm text-black justify-end ${individualStyles}`}>
                    skill: +<span className='text-green-900'>00</span>
                </div>

                <div className={`bg-gray-100 h-5 w-24 px-2 text-sm text-black justify-end ${individualStyles}`}>
                    expert: +<span className='text-red-900'>00</span>
                </div>
            </div>

        </div>


    )

}

export default InputAttributes