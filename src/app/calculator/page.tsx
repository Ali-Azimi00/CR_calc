"use client"
import Attributes from "@/components/Attributes"
import Offensive from "@/components/Offensive"
import Defensive from "@/components/Defensive"
import { AttributesInput, Attr, generateAttributesInput } from "@/constants/MonsterStats"
import { ChangeEvent, useState } from "react"
// import Dropdown from "@/components/Dropdown"
//rafce
const Calculator = () => {

    const [attrInput,setAttrInput] = useState(generateAttributesInput());

    type AttributeKey = keyof typeof attrInput;

    // function to handle attribute modification in InputAttributes component
    function handleModifyAttribute (attrName: string, newValue?: number | boolean): void {
        const attrKey = attrName as AttributeKey;
        const newAttr = { ...attrInput };
        // Check for if newValue is a number or boolean and update the corresponding attribute
        if (typeof newValue === 'number' && newAttr[attrKey] && typeof newAttr[attrKey] === "object" && "value" in newAttr[attrKey]) {
            (newAttr[attrKey] as { value: number }).value = newValue;
        }
        if (typeof newValue === 'boolean' && newAttr[attrKey] && typeof newAttr[attrKey] === "object" && "save" in newAttr[attrKey]) {
            (newAttr[attrKey] as { save: boolean }).save = newValue;
        }
        setAttrInput(newAttr);
        console.log(`Attribute ${attrName} modified with:`, newValue);
        console.log(`Attribute ${attrName} new value:`, attrInput[attrKey]);
    }

    //function to handle passive perception checkbox in Attributes component
    const handlePassivePerceptionCheck = (event: ChangeEvent<HTMLInputElement>) => {
        const attributes = attrInput;
        console.log("Passive Perception checked:", event.target.checked);
        attributes.passPerc = event.target.checked;
        setAttrInput(attributes);
        console.log("Attributes: ", attrInput);
    };

    // function to handle initiative checkbox in Attributes component
    const handleInitiativeCheck = (event: ChangeEvent<HTMLInputElement>) => {
        const attributes = attrInput;
        console.log("Passive Perception checked:", event.target.checked);
        attributes.initiative = event.target.checked;
        setAttrInput(attributes);
        console.log("Attributes: ", attrInput);
    };


    return (
        <div className="">

            <div className="crTracker ">
                <div>
                    CR: ##
                </div>
            </div>

            <div className="flex flex-wrap justify-center">
                <div className=" mb-4  justify-center min-w-100 max-w-[1000px] border-2 border-red-800">
                    <Attributes attrInput={attrInput} handleModifyAttribute={handleModifyAttribute} handlePassivePerceptionCheck={handlePassivePerceptionCheck} handleInitiativeCheck={handleInitiativeCheck}/>
                </div>

                <div className="md:flex flex-row md:gap-1 justify-around items-center w-full min-w-100 max-w-[1000px]">
                    <div className="mb-4 w-full">
                        <Defensive />
                    </div>

                    <div className="mb-4  w-full">
                        <Offensive />
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Calculator