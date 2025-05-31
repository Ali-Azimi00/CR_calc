import React from 'react'
import Dropdown from './Dropdown'

type DropdownOption = {
    label: string;
};

interface DropdownFieldOptions {
    options: DropdownOption[],
    width: string,
    title: string,
    titleStyle: string | null,

}

const FieldDropdown: React.FC<DropdownFieldOptions> = ({ options, width, title, titleStyle }) => {
    return (
        <div className={`${width}`}>
            <div className='border-1 border-gray-400 text-center'>
                <div className={`bg-gray-400 text-sm ${titleStyle}`} >
                    {title}
                </div>
                <div>
                    <Dropdown options={options} />
                </div>
            </div>
        </div>)
}

export default FieldDropdown