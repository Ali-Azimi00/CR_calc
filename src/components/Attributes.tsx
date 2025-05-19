import React from 'react'
import InputField from './inputField'
import OutputField from './outputField'
import Dropdown from './Dropdown'

const Attributes = () => {
    return (
        <div className="card">
            <div className="border-2 border-gray-700  mb-2  text-center">
                Attributes
            </div>
            <div className="space-y-2 ">

                <div className="flex flex-row justify-around gap-1">
                    <Dropdown options={[
                        { label: 'option1' },
                        { label: 'option2' }
                    ]} />
                    <OutputField value="output1" />
                </div>

                <div className="flex flex-row justify-around gap-1">
                    <InputField placeholder="input1" />
                    <OutputField value="output1" />
                </div>

                <div className="flex flex-row justify-around gap-1">
                    <InputField placeholder="input1" />
                    <OutputField value="output1" />
                </div>

                <div className="flex flex-row justify-around gap-1">
                    <InputField placeholder="input1" />
                    <OutputField value="output1" />
                </div>


            </div>
        </div>
    )
}

export default Attributes