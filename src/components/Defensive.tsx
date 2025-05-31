import React from 'react'
import Dropdown from './Dropdown'
import FieldBox from './FieldBox'
import FieldDropdown from './FieldDropdown'


const Defensive = () => {
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
                            <div className='w-[40%]'>

                                <div className='border-1 border-gray-400 text-center'>
                                    <div className='bg-gray-400 text-sm' >
                                        Hit Dice
                                    </div>
                                    <div>
                                        000
                                    </div>
                                </div>

                            </div>
                            <div className='w-[40%]'>
                                <div className='border-1 border-gray-400 text-center text-gray-500'>
                                    <div className='bg-gray-400 text-sm' >
                                        Effective HP
                                    </div>
                                    <div className='bg-gray-100'>
                                        000
                                    </div>
                                </div>
                            </div>
                            <div className='w-[60%]'>
                                <div className='border-1 border-gray-400 text-center'>
                                    <div className='bg-gray-400 text-sm' >
                                        Size
                                    </div>
                                    <div>
                                        <Dropdown options={[
                                            { label: 'small' },
                                            { label: 'gigantor' }
                                        ]} />

                                    </div>
                                </div>
                            </div>
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




            </div>



        </div >)
}

export default Defensive