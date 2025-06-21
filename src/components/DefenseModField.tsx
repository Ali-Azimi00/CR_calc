import React from 'react'


interface ModFieldOptions {
    title: string,
    hp: string | null,
    ac: string | null,
}

const DefenseModField: React.FC<ModFieldOptions> = ({ title, hp, ac }) => {
    return (
        <div className=' w-full flex flex-row'>
            <div className={`w-[55%] text-end `}>
                {title}
            </div>
            <div className='w-[5%] flex justify-end items-center '>
                <input type='checkbox' className='h-4 w-4' />
            </div>
            <div className='w-[20%] flex justify-center items-center
             text-gray-500 text-xs' >
                {hp}
            </div>
            <div className='w-[20%] flex justify-center items-center
             text-gray-500 text-xs'>
                {ac}
            </div>
        </div>
        )
}

export default DefenseModField