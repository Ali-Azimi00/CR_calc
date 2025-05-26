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
            </div>

        </div>
    )
}

export default Attributes