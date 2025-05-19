import React from 'react'

interface OutFieldProps {
    value?: string;
    individualStyles?: string;
}

const outputField: React.FC<OutFieldProps> = ({ value, individualStyles }) => {



    return (
        <div
            className={`h-6 w-[40%] bg-gray-100 border-1 border-red-500 px-2 ${individualStyles}`}
        >
            {value}
        </div>
    )
}

export default outputField