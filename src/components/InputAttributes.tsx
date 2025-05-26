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
            <div className='flex flex-row justify-end'>
                <div className={`h-6 w-14 bg-gray-400 px-2 border-1 border-black
                    ${individualStyles}`
                }>
                    {placeholder}
                </div>
                <input className={`h-6 w-14 bg-gray-100 px-2 border-1 border-black
                        ${individualStyles}`}
                    placeholder={'00'}
                />
                <div className={`h-6 w-14 bg-gray-400 px-2 border-1 border-black
                    ${individualStyles}`
                }>
                    0
                </div>
                <div className={`h-6 w-14 bg-gray-400 pl-2 border-1 border-black
                    border-r-0 flex justify-between rounded-tr-lg
                    ${individualStyles}`}>
                    <div className=''>
                        00
                    </div>
                    <div className='relative'>
                        <input type="checkbox" className="absolute border-none top-0 right-0 " />
                    </div>
                </div>
            </div>

            {(placeholder === 'CON') ?
                (<div className='flex flex-row  opacity-75  justify-end'>
                    <div className={`bg-gray-400  h-5 w-42 px-4 rounded-bl-lg 
                    text-sm text-gray-700 justify-end 
                    ${individualStyles}`}>
                        <div className='flex flex-row justify-between'>
                            <div>
                                HP
                            </div>
                            <div>
                                000(00d + 000)
                            </div>
                        </div>
                    </div>
                </div>)
                :
                (<div className='flex flex-row  opacity-75  justify-end'>
                    <div className={`bg-gray-400  h-5 w-20 px-2 rounded-bl-lg 
                    text-sm text-gray-700 justify-end 
                    ${individualStyles}`}>
                        skill: +<span className='text-green-900'>00</span>
                    </div>

                    <div className={`bg-gray-100 h-5 w-22 px-2 
                text-sm text-gray-700 justify-end 
                    ${individualStyles}`}>
                        expert: +<span className='text-red-900'>00</span>
                    </div>
                </div>)
            }

        </div>


    )

}

export default InputAttributes