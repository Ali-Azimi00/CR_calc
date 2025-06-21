import React from 'react'


interface BoxOptions {
    title: string,
    value: string,
    width: string,
    boxStyle: string | null,
    titleStyle: string | null,
    valueStyle: string | null,
};



const Box: React.FC<BoxOptions> = ({ title, value, width, boxStyle, titleStyle, valueStyle }) => {

    return (
        <div className={`${width}`}>
            <div className={`border-1 border-gray-400 text-center  ${boxStyle}`}>
                <div className={`bg-gray-400 text-sm  ${titleStyle}`} >
                    {title}
                </div>
                <div className={` ${valueStyle}`}>
                    {value}
                </div>
            </div>

        </div>)
}

export default Box;
