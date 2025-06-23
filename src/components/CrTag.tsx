import { CrDisplay } from '@/constants/MonsterStats';
import React, { ChangeEvent, useEffect, useState } from 'react'

interface CrTagProps {
    crDisplay?: CrDisplay
    handleGoalCrChange?: (newGoalCr: number) => void;
}

const CrTag: React.FC<CrTagProps> = ({crDisplay, handleGoalCrChange}) => {
    const [goalCr, setGoalCr] = useState<number>(0);
    const crDisplayData = crDisplay || { cr: 0, goalCr: 0, prof: 2 , defCr: 0, offCr: 0};
    // const [prof, setProf] = useState<number>(crDisplayData.prof ?? 2);

    useEffect (() => {
        console.log(`useEffect triggered with goalCr: ${goalCr} and crDisplayData:`, crDisplayData);
        if (handleGoalCrChange) {
            console.log(`Calling handleGoalCrChange with: ${goalCr}`);
            handleGoalCrChange(goalCr);
        }
        console.log(`useEffect has completed, crDisplayData:`, crDisplayData);
    }, [goalCr]);


    const handleGoalCrChangeWrapper = (event: ChangeEvent<HTMLInputElement>)=> {
        console.log(`Input event: ${event.target.value}`);
        const newGoalCr = parseInt(event.target.value, 10);
        console.log(`newGoalCr has been set to: ${newGoalCr}`);
        if (isNaN(newGoalCr)) {
            console.log(`Invalid input, setting goalCR to 0`);
            setGoalCr(0);
        } else {
        console.log(`Setting goalCR with: ${newGoalCr}`);
        setGoalCr(newGoalCr);
        }
        // setProf(crDisplayData.prof ?? 2);
    }


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
                            {crDisplayData.cr}
                        </div>
                    </div>


                    <div className=' flex justify-center text-center text-xs '>
                        <div className='bg-gray-400 p-2 w-[70%] '>
                            Goal CR
                        </div>
                        <input
                            className=' text-black bg-gray-50 w-[30%] text-center'
                            placeholder='--'
                            id='goalCrInput'
                            value={goalCr}
                            onInput={handleGoalCrChangeWrapper}
                            onKeyDown={(e)=>handleGoalCrChangeWrapper}
                        />
                    </div>


                    <div className=' flex justify-center text-center text-xs text-nowrap'>
                        <div className='bg-gray-400 p-2 w-[70%] '>
                            Prof. Bonus
                        </div>
                        <div className='bg-gray-300  p-2 w-[30%] text-center'>
                            +{crDisplayData.prof}
                        </div>
                    </div>


                    <div className=' flex justify-center text-center text-xs text-nowrap text-gray-600'>
                        <div className='bg-gray-400 p-2 w-[70%] '>
                            Def. CR
                        </div>
                        <div className='bg-gray-300  p-2 w-[30%] text-center'>
                            {crDisplayData.defCr ?? '--'}
                        </div>
                    </div>

                    <div className=' flex justify-center text-center text-xs text-nowrap text-gray-600'>
                        <div className='bg-gray-400 p-2 w-[70%] '>
                            Off. CR
                        </div>
                        <div className='bg-gray-300  p-2 w-[30%] text-center'>
                            {crDisplayData.offCr ?? '--'}
                        </div>
                    </div>
                </div>
            </div>

        </div>)
}

export default CrTag