"use client";
import Attributes from "@/components/Attributes";
import Offensive from "@/components/Offensive";
import Defensive from "@/components/Defensive";
import {
  AttributesInput,
  AttrInput,
  defaultAttributesInput,
  AttributesOutput,
  generateAttributesOutput,
  getModifier,
  getAvgDieRoll,
  defaultDefensiveInput,
  generateBlankCrDisplay,
  generateDefultDefensiveOutput,
  getTotalHp,
  getHpString,
  getProfByCR,
} from "@/constants/MonsterStats";
import {
  Size,
} from "@/constants/Constants";
import { ChangeEvent, useState } from "react";


import CrTag from "@/components/CrTag"
// import Dropdown from "@/components/Dropdown"
//rafce
const Calculator = () => {
  const [crDisplay, setCrDisplay] = useState(generateBlankCrDisplay);
  // const [proficiency, setProficiency] = useState(2);
  const proficiency = crDisplay.prof ?? 2;
  const [attrInput, setAttrInput] = useState<AttributesInput>(defaultAttributesInput);
  const [attrOutput, setAttrOutput] = useState<AttributesOutput>(generateAttributesOutput(attrInput, proficiency));
  const [defInput, setDefInput] = useState(defaultDefensiveInput);
  const [defOutput, setDefOutput] = useState(generateDefultDefensiveOutput);
  type AttributeKey = keyof typeof attrInput;

  //#region CR FUNCTIONS
  function handleGoalCrChange(newGoalCr: number): void {
    console.log(`New goal CR received: ${newGoalCr}`);
    const newCrDisplay = {...crDisplay};
    newCrDisplay.goalCr = newGoalCr;
    newCrDisplay.prof = getProfByCR(newGoalCr);
    setCrDisplay(newCrDisplay);
    // setProficiency(getProfByCR(newGoalCr));
    console.log(`Cr Display values: `,crDisplay);
  }

  //#endregion

  //#region ATTRIBUTES FUNCTIONS
  // function to handle attribute modification in InputAttributes component
  function handleModifyAttribute(attrName: string, newValue?: number | boolean): void {
    const attrKey = attrName as AttributeKey;
    const newAttrInput = { ...attrInput };
    const newAttrOutput = { ...attrOutput };
    // Check for if newValue is a number or boolean and update the corresponding attribute
    // modify the value of the attribute in attrInput and attrOutput
    if (typeof newValue === "number" && newAttrInput[attrKey] && typeof newAttrInput[attrKey] === "object" && "value" in newAttrInput[attrKey]) {
      (newAttrInput[attrKey] as { value: number }).value = newValue;
      (newAttrOutput[attrKey] as { value: number }).value = newValue;
      (newAttrOutput[attrKey] as { mod: number }).mod = getModifier(newValue);
      (newAttrOutput[attrKey] as { modProf: number }).modProf = (newAttrOutput[attrKey] as { mod: number }).mod + proficiency;
      (newAttrOutput[attrKey] as { expertise: number }).expertise = (newAttrOutput[attrKey] as { modProf: number }).modProf + proficiency;
    }
    // modify the save attribute if newValue is a boolean
    if (typeof newValue === "boolean" && newAttrInput[attrKey] && typeof newAttrInput[attrKey] === "object" && "save" in newAttrInput[attrKey]) {
      (newAttrInput[attrKey] as { save: boolean }).save = newValue;
    }
    setAttrInput(newAttrInput);
    setAttrOutput(newAttrOutput);
    console.log(`Attribute ${attrName} modified with:`, newValue);
    console.log(`Attribute ${attrName} new value:`, attrInput[attrKey]);
    console.log(`Attribute ${attrName} new value:`, attrOutput[attrKey]);
  }

  //function to handle passive perception checkbox in Attributes component
  const handlePassivePerceptionCheck = (event: boolean) => {
    const attributes = attrInput;
    console.log("Passive Perception checked:", event);
    attributes.passPerc = event;
    setAttrInput(attributes);
    console.log("Attributes: ", attrInput);
  };

  // function to handle initiative checkbox in Attributes component
  const handleInitiativeCheck = (event: boolean) => {
    const attributes = attrInput;
    console.log("Passive Perception checked:", event);
    attributes.initiative = event;
    setAttrInput(attributes);
    console.log("Attributes: ", attrInput);
  };
  //#endregion


  //#region DEFENSIVE FUNCTIONS
  function handleHpChange(newValue: number | Size) {
    const newDefInput = defInput;
    newDefInput.hpInput ??= { size: Size.Medium, hitDice: 1 };
    const newDefOutput = defOutput;
    newDefOutput.hpOutput ??= {};
    if (typeof newValue === 'number') {
      newDefInput.hpInput.hitDice = newValue;
      newDefOutput.hpOutput = {
        totalHp: getTotalHp(newDefInput.hpInput.hitDice, (newDefInput.hpInput.size ?? Size.Medium), (attrInput.CON?.value ?? 10)),
        effectiveHp: newDefOutput.hpOutput.totalHp,
        hpString: getHpString(newDefInput.hpInput.hitDice, (newDefInput.hpInput.size ?? Size.Medium), (attrInput.CON?.value ?? 10)),
      }
    } else {
      if (!newDefInput.hpInput?.hitDice) newDefInput.hpInput = { size: newValue, hitDice: 1 };
      newDefInput.hpInput.size = newValue;
      newDefOutput.hpOutput = {
        totalHp: getTotalHp((newDefInput.hpInput.hitDice ?? 1), (newDefInput.hpInput.size ?? Size.Medium), (attrInput.CON?.value ?? 10)),
        effectiveHp: newDefOutput.hpOutput.totalHp,
        hpString: getHpString((newDefInput.hpInput.hitDice ?? 1), (newDefInput.hpInput.size ?? Size.Medium), (attrInput.CON?.value ?? 10)),
      }
    }
    setDefInput(newDefInput);
    setDefOutput(newDefOutput);
  }



  //#endregion


  //#region TESTING VALUES

  const [testValue, setTestValue] = useState('');
  const [testResult, setTestResult] = useState('');
  function handleTestValueChange() {
    setTestResult(`${getAvgDieRoll(parseInt(testValue))}`);
    console.log(`Test value changed to: ${testValue}`);
    console.log(`Test result: ${testResult}`);
  }
  // <input //INPUT FOR TESTING PURPOSES
  //  className={`h-6 w-14 bg-gray-100 px-2 border-1 border-black`} onChange={(e)=>{setTestValue(e.target.value)}}/>

  //#endregion

  return (
    <div className="">

      <div className="">

        <CrTag crDisplay={crDisplay} handleGoalCrChange={handleGoalCrChange}/>

        <div className="flex flex-wrap justify-center">
          <div className=" mb-4  justify-center min-w-100 max-w-[1000px] border-2 border-red-800">
            <Attributes
              proficiency={proficiency}
              attrInput={attrInput}
              attrOutput={attrOutput}
              handleModifyAttribute={handleModifyAttribute}
              handlePassivePerceptionCheck={handlePassivePerceptionCheck}
              handleInitiativeCheck={handleInitiativeCheck}
              handleTestValueChange={handleTestValueChange}
              hpString={defOutput.hpOutput?.hpString}
            />
            {/* <button className="flex flex-row justify-around gap-1" onClick={handleTestValueChange}/> */}
          </div>

          <div className="md:flex flex-row md:gap-1 justify-around items-center w-full min-w-100 max-w-[1000px]">
            <div className="mb-4 w-full">
              <Defensive
                defInput={defInput}
                defOutput={defOutput}
                handleHpChange={handleHpChange}
              />
            </div>

            <div className="mb-4  w-full">
              <Offensive />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
