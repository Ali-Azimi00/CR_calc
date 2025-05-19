import React from 'react'
import InputField from './inputField'
import OutputField from './outputField'

const Attributes = () => {
    return (
        <div className="card">
            <div className="border-2 border-gray-700  mb-2  text-center">
                Attributes
            </div>
            <div className="space-y-2">

                <div className="flex flex-row justify-around">
                    <InputField placeholder="input1" />
                    {/* <div className=' border-2 border-white h-6 w-[40%]'>
                        <Dropdown options={[
                            { label: 'option1' },
                            { label: 'option2' }
                        ]} />
                    </div> */}

                    <OutputField value="output1" />

                    {/* <div className="mb-4 justify-center items-center flex flex-row">
                        <Dropdown options={[
                            { label: 'option1' },
                            { label: 'option2' }
                        ]} />
                    </div> */}
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
        </div>
    )
}

export default Attributes