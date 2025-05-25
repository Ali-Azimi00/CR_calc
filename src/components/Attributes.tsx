import React from 'react'
import InputAttributes from './InputAttributes'
// import OutputField from './outputField'
// import Dropdown from './Dropdown'

const Attributes = () => {

    const attributeNames = ['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA']

    const renderAttributeFields = () => {
        return (
            attributeNames.map((att) => (
                <div className="mb-4 flex flex-1" key={att}>
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
                <div className="mb-4" >
                    <InputAttributes placeholder='STR' />
                </div>
                <div className="mb-4 " >
                    <InputAttributes placeholder='DEX' />
                </div>

                <div className=" mb-4" >
                    <InputAttributes placeholder='CON' />
                </div>
                <div className="mb-4 " >
                    <InputAttributes placeholder='INT' />
                </div>

                <div className="mb-4" >
                    <InputAttributes placeholder='WIS' />
                </div>
                <div className="mb-4" >
                    <InputAttributes placeholder='CHA' />
                </div>
            </div>






        </div>
    )
}

export default Attributes