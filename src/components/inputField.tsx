import React from 'react'

interface InputFieldProps {
    placeholder?: string;
    individualStyles?: string;
}

const inputField: React.FC<InputFieldProps> = ({ placeholder, individualStyles }) => {



    return (
        <input
            className={`h-6 w-[50%] bg-gray-100 border-1 border-red-500 px-2 ${individualStyles}`}
            placeholder={placeholder}>
        </input>
    )
}

export default inputField