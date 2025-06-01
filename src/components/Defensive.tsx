import React from 'react'
// import Dropdown from './Dropdown'
import FieldBox from './FieldBox'
import FieldDropdown from './FieldDropdown'


const Defensive = () => {

    const resistanceTypeList = [
        'Acid',
        'Cold',
        'Fire',
        'Force',
        'Lightning',
        'Necrotic',
        'Poison',
        'Psychic',
        'Radiant',
        'Thunder',
    ]

    const physicalTypeList = [
        ' Blugeoning',
        'Piercing',
        'Slashing',
    ]

    const renderPhysicalList = () => {
        return (
            physicalTypeList.map((item) => (
                <div key={item} className=' w-full bg-gray-200 flex '>
                    <div className='w-[50%] text-end'>
                        {item}
                    </div>

                    <div className='w-[20%] flex justify-center items-center'>
                        <input type='checkbox' className='h-4 w-4 border-1 rounded z-2' />
                    </div>
                    <div className='w-[20%] flex justify-center items-center'>
                        <input type='checkbox' className='h-4 w-4 border-1 rounded z-2' />

                    </div>
                    <div className='w-[20%] flex justify-center items-center'>
                        <input type='checkbox' className='h-4 w-4 border-1 rounded z-2' />
                    </div>
                </div>

            ))
        )
    }


    const renderResistanceList = () => {
        return (
            resistanceTypeList.map((item) => (
                <div key={item} className=' w-full hover:bg-gray-300 flex '>
                    <div className='w-[50%] text-end'>
                        {item}
                    </div>

                    <div className='w-[20%] flex justify-center items-center'>
                        <input type='checkbox' className='h-4 w-4 border-1 rounded' />
                    </div>
                    <div className='w-[20%] flex justify-center items-center'>
                        <input type='checkbox' className='h-4 w-4 border-1 rounded' />

                    </div>
                    <div className='w-[20%] flex justify-center items-center'>
                        <input type='checkbox' className='h-4 w-4 border-1 rounded' />
                    </div>
                </div>

            ))
        )
    }


    return (
        <div>
            <div className='-mb-3 flex flex-row-reverse'>
                <div className="bg-gray-400 text-center text-black 
                w-[40%] justify-end border-2 border-white">

                    <div className='flex flex-row space-evenly'>
                        <div className='bg-gray-400 w-full'>
                            Defensive CR:
                        </div>
                        <div className='bg-gray-200 w-12'>
                            00
                        </div>

                    </div>

                </div>
            </div>


            <div className="justify-center items-center card">

                {/* HP */}
                <div className='flex flex-wrap text-black mt-4
                    justify-center 
                    md:justify-around 
                    gap-1'>
                    <div className='w-full'>
                        <div className=' flex justify-between
                    '>
                            <div className='bg-gray-400  w-full text-center'>
                                HP
                            </div>
                            <div className='bg-gray-300 w-full text-center'>
                                0000(00d00+0000)
                            </div>
                        </div>
                        <div className='flex-wrap bg-gray-50 flex gap-2 justify-evenly py-2'>

                            <FieldBox
                                title={'Hit Dice'}
                                value={'000'}
                                width={'w-[40%]'}
                                boxStyle={null}
                                titleStyle={null}
                                valueStyle={null}
                            />

                            <FieldBox
                                title={'Effective HP'}
                                value={'000'}
                                width={'w-[40%]'}
                                boxStyle={'text-gray-500'}
                                titleStyle={null}
                                valueStyle={null}
                            />

                            <FieldDropdown
                                options={[
                                    { label: 'small' },
                                    { label: 'gigantor' },
                                ]}
                                width={'w-[60%]'}
                                title={'Size'}
                                titleStyle={null}
                            />

                        </div>
                    </div>
                </div>

                {/* AC */}
                <div className='flex flex-wrap text-black mt-4
                    justify-center  
                    md:justify-evenly 
                    gap-0'>
                    <div className='w-full'>

                        <div className=' flex justify-evenly'>
                            <div className='bg-gray-400  w-40 text-center'>
                                AC
                            </div>
                            <div className='bg-gray-300 w-full text-center'>
                                0000 (type)
                            </div>
                        </div>

                        <div className='flex-wrap bg-gray-50 flex gap-2 justify-center py-2'>

                            <FieldDropdown
                                options={[
                                    { label: 'type1' },
                                    { label: 'type2' },
                                ]}
                                width={'w-[50%]'}
                                title="Armor Type"
                                titleStyle={null}
                            />

                            <FieldBox
                                title={'Effective AC'}
                                value={'000'}
                                width={'w-[30%]'}
                                boxStyle={null}
                                titleStyle='text-gray-500'
                                valueStyle='text-gray-500'
                            />

                            <FieldBox
                                title='Natural Armor'
                                value='000'
                                width='w-[45%]'
                                boxStyle={null}
                                titleStyle={null}
                                valueStyle={null}
                            />

                            <FieldBox
                                title='Extra'
                                value='+00'
                                width='w-[35%]'
                                boxStyle={null}
                                titleStyle={null}
                                valueStyle={null}
                            />

                            <FieldDropdown
                                options={[
                                    { label: 'ATT' },
                                    { label: 'gigantor' },
                                ]}
                                width={'w-[45%]'}
                                title={'Unarmored Defense'}
                                titleStyle={null}
                            />

                            <div className='w-[35%]  text-sm'>
                                <div className='px-1  '>
                                    <div className='w-full flex flex-row  justify-center mb-1 '>
                                        <div className='pr-1'>Shield</div>
                                        <input type='checkbox' />
                                    </div>
                                    <div className='w-full flex flex-row  justify-center  '>
                                        <div className='bg-gray-400 px-2'>Bonus</div>
                                        <div className='border-1 border-gray-400 px-2'>00</div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>


                {/* Resistance & Immunity  */}
                <div className='flex flex-wrap text-black mt-4
                    justify-center 
                    md:justify-around 
                    gap-0'>
                    <div className='w-full'>
                        <div className=' flex justify-between '>
                            <div className='bg-gray-400 w-[65%] text-center'>
                                Resistance & Immunity
                            </div>
                            <div className='bg-gray-300 w-[35%] text-center'>
                                HP x00
                            </div>
                        </div>


                        <div className='flex-wrap bg-gray-50 flex 
                        gap-0 justify-evenly py-4 text-sm relative'>

                            <div className=' w-full bg-gray-300 flex flex-row'>
                                <div className='w-[50%] text-end text-gray-500'>
                                    Clear All
                                </div>
                                <div className='w-[20%] flex justify-center items-center'>
                                    s
                                </div>
                                <div className='w-[20%] flex justify-center items-center'>
                                    <div className='h-4 w-4 border-1 rounded'>
                                    </div>
                                </div>
                                <div className='w-[20%] flex justify-center items-center'>
                                    <div className='h-4 w-4 border-1 rounded'>
                                    </div>
                                </div>
                            </div>

                            <div className=' w-full hover:bg-gray-300 
                            flex flex-row mt-2 text-gray-500 '>
                                <div className='w-[50%] text-end text-gray-500' />
                                <div className='w-[20%] flex justify-center '>
                                    Val
                                </div>
                                <div className='w-[20%] flex justify-center '>
                                    Res
                                </div>
                                <div className='w-[20%] flex justify-center '>
                                    Imm
                                </div>
                            </div>



                            {renderPhysicalList()}



                            <div className='h-1 w-full bg-gray-300'></div>


                            <div className=' w-full bg-gray-300 flex  '>
                                <div className='w-[50%] text-end'></div>
                                <div className='w-[20%] flex justify-center items-center'>
                                    <div className='border-1 h-16 mb-16 absolute z-0 '></div>
                                    <button className='h-3 w-5 border-1 rounded hover:cursor-pointer bg-gray-300 z-2'>
                                    </button>
                                </div>
                                <div className='w-[20%] flex justify-center items-center'>
                                    <div className='border-1 h-16 mb-16 absolute z-0 '></div>
                                    <button className='h-3 w-5 border-1 rounded hover:cursor-pointer bg-gray-300 z-2'>
                                    </button>
                                </div>
                                <div className='w-[20%] flex justify-center items-center'>
                                    <div className='border-1 h-16 mb-16 absolute z-0 '></div>
                                    <button className='h-3 w-5 border-1 rounded hover:cursor-pointer bg-gray-300 z-2'>
                                    </button>
                                </div>
                            </div>
                            <div className='h-1 w-full bg-gray-300'></div>


                            {renderResistanceList()}



                        </div>
                    </div>
                </div>


            </div>

        </div >)
}

export default Defensive