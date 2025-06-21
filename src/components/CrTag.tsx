import React from 'react'

const CrTag = () => {
    return (
        <div className="crTracker ">
            <div className='flex flex-wrap  
                    text-black
                    w-35
                    gap-1'>
                <div className=''>


                    <div className=' flex justify-between  font-bold '>
                        <div className='bg-gray-400  p-2 w-full text-center'>
                            CR
                        </div>
                        <div className='bg-gray-300  p-2 w-full text-center'>
                            00
                        </div>
                    </div>


                    <div className=' flex justify-center text-center text-xs '>
                        <div className='bg-gray-400 p-2 w-[70%] '>
                            Goal CR
                        </div>
                        <input
                            className=' text-black bg-gray-50 w-[30%] text-center'
                            placeholder='00'
                        />
                    </div>


                    <div className=' flex justify-center text-center text-xs text-nowrap'>
                        <div className='bg-gray-400 p-2 w-[70%] '>
                            Prof. Bonus
                        </div>
                        <div className='bg-gray-300  p-2 w-[30%] text-center'>
                            +00
                        </div>
                    </div>


                    <div className=' flex justify-center text-center text-xs text-nowrap text-gray-600'>
                        <div className='bg-gray-400 p-2 w-[70%] '>
                            Def. CR
                        </div>
                        <div className='bg-gray-300  p-2 w-[30%] text-center'>
                            00
                        </div>
                    </div>

                    <div className=' flex justify-center text-center text-xs text-nowrap text-gray-600'>
                        <div className='bg-gray-400 p-2 w-[70%] '>
                            Off. CR
                        </div>
                        <div className='bg-gray-300  p-2 w-[30%] text-center'>
                            00
                        </div>
                    </div>
                </div>
            </div>

        </div>)
}

export default CrTag