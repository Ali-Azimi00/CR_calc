import React from 'react'
import InputAttributes from './InputAttributes'
// import OutputField from './outputField'
// import Dropdown from './Dropdown'

const Attributes = () => {

    const attributeNames = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']

    const renderAttributeFields = () => {
        return (
            attributeNames.map((att) => (
                <div className="mb-4" key={att}>
                    <InputAttributes placeholder={att} />
                </div>
            ))
        )
    }


    return (
        <div className="card">
            <div className="border-2 border-gray-700  mb-2  text-center">
                Attributes
            </div>

            <div className='flex flex-wrap 
            justify-center 
            md:justify-around 
            gap-1'>
                {renderAttributeFields()}

                <div className='justify-center w-56 text-black'>
                    <div className='mb-2 bg-gray-400 pl-2 border-1 border-black
                    border-r-0 flex justify-end rounded-tr-lg' >
                        <div className='pr-6'>
                            Passive Perception:
                            <span className='ml-2'>
                                00
                            </span>
                        </div>
                        <div className='relative'>
                            <input type="checkbox" className="absolute border-none top-0 right-0 " />
                        </div>
                    </div>


                    <div className='mb-2 bg-gray-400 pl-2 border-1 border-black
                    border-r-0 flex justify-end rounded-tr-lg'>
                        <div className='pr-6'>
                            Initiative:
                            <span className='ml-2'>
                                00
                            </span>
                        </div>
                        <div className='relative'>
                            <input type="checkbox" className="absolute border-none top-0 right-0 " />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Attributes