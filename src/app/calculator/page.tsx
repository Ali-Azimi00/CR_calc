"use client"
import Attributes from "@/components/Attributes"
import Offensive from "@/components/Offensive"
import Defensive from "@/components/Defensive"
import { AttributesInput, Attr, generateAttributesInput, AttributesOutput, generateAttributesOutput, getModifier } from "@/constants/MonsterStats"
import { ChangeEvent, useState } from "react"
// import Dropdown from "@/components/Dropdown"
//rafce
const Calculator = () => {
    const [proficiency, setProficiency] = useState(2);
    const [attrInput,setAttrInput] = useState<AttributesInput>(generateAttributesInput());
    const [attrOutput, setAttrOutput] = useState<AttributesOutput>(generateAttributesOutput(attrInput,proficiency));
    type AttributeKey = keyof typeof attrInput;


    // function to handle attribute modification in InputAttributes component
    function handleModifyAttribute (attrName: string, newValue?: number | boolean): void {
        const attrKey = attrName as AttributeKey;
        const newAttrInput = { ...attrInput };
        const newAttrOutput = { ...attrOutput };
        // Check for if newValue is a number or boolean and update the corresponding attribute
        if (typeof newValue === 'number' && newAttrInput[attrKey] && typeof newAttrInput[attrKey] === "object" && "value" in newAttrInput[attrKey]) {
            (newAttrInput[attrKey] as { value: number }).value = newValue;
            (newAttrOutput[attrKey] as { value: number }).value = newValue;
            (newAttrOutput[attrKey] as { mod: number }).mod = getModifier(newValue);
            (newAttrOutput[attrKey] as {modProf: number }).modProf = (newAttrOutput[attrKey] as { mod: number }).mod + proficiency;
            (newAttrOutput[attrKey] as {expertise: number }).expertise = (newAttrOutput[attrKey] as { modProf: number }).modProf + proficiency;

        }
        if (typeof newValue === 'boolean' && newAttrInput[attrKey] && typeof newAttrInput[attrKey] === "object" && "save" in newAttrInput[attrKey]) {
            (newAttrInput[attrKey] as { save: boolean }).save = newValue;
        }
        setAttrInput(newAttrInput);
        setAttrOutput(newAttrOutput);
        console.log(`Attribute ${attrName} modified with:`, newValue);
        console.log(`Attribute ${attrName} new value:`, attrInput[attrKey]);
        console.log(`Attribute ${attrName} new value:`, attrOutput[attrKey]);
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
                    <Attributes proficiency={proficiency} attrInput={attrInput} attrOutput={attrOutput} handleModifyAttribute={handleModifyAttribute} handlePassivePerceptionCheck={handlePassivePerceptionCheck} handleInitiativeCheck={handleInitiativeCheck}/>
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