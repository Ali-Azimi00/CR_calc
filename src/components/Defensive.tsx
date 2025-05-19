import React from 'react'
import InputField from './inputField'
import OutputField from './outputField'
import Dropdown from './Dropdown'


const Defensive = () => {
    return (
        <div className="justify-center items-center card">
            <div className="border-2 border-gray-700  mb-2  text-center">
                Defensive
            </div>
            <div className="space-y-2">

                <div className="flex flex-row justify-around">
                    <Dropdown options={[
                        { label: 'option1' },
                        { label: 'option2' }
                    ]} />
                    <OutputField value="output1" />
                </div>

                <div className="flex flex-row justify-around">
                    <InputField placeholder="input1" />
                    <OutputField value="output1" />
                </div>

                <div className="flex flex-row justify-around">
                    <InputField placeholder="input1" />
                    <OutputField value="output1" />
                </div>

                <div className="flex flex-row justify-around">
                    <InputField placeholder="input1" />
                    <OutputField value="output1" />
                </div>


            </div>
        </div>)
}

export default Defensive