"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import InputAttributes from "./InputAttributes";
import { AttributesInput, AttributesOutput } from "../constants/MonsterStats";
// import OutputField from './outputField'
// import Dropdown from './Dropdown'

interface AttributesProps {
  proficiency?: number;
  attrInput?: AttributesInput;
  attrOutput?: AttributesOutput;
  handleModifyAttribute?: (attrName: string, newValue: number | boolean) => void;
  handlePassivePerceptionCheck?: (event: boolean) => void;
  handleInitiativeCheck?: (event: boolean) => void;
  handleTestValueChange?: () => void;
}

const Attributes: React.FC<AttributesProps> = ({
  proficiency,
  attrInput,
  attrOutput,
  handleModifyAttribute,
  handlePassivePerceptionCheck,
  handleInitiativeCheck,
  handleTestValueChange,
}) => {
  const prof = proficiency || 2; // Default proficiency if not provided
  const wisMod = attrOutput?.WIS?.mod ?? 0;
  const dexMod = attrOutput?.DEX?.mod ?? 0;
  const attributeNames = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];
  const [passPerceptionCheck, setPassPerceptionCheck] = useState<boolean>(attrInput?.passPerc || false);
  const [initCheck, setInitiativeCheck] = useState<boolean>(attrInput?.initiative || false);
  const [passivePerception, setPassPerception] = useState<number>(attrInput?.passPerc ? (10 + wisMod + prof) : (10 + wisMod));
  const [initiative, setInitiative] = useState<number>(attrInput?.initiative ? (dexMod + prof) : dexMod);

  useEffect(()=>{
    updatePassPerception();
  },[proficiency,wisMod,passPerceptionCheck]);

  useEffect(()=>{
    updateInitiative();
  },[proficiency,dexMod,initCheck]);

  function updatePassPerception() {
    const basePerception = 10 + wisMod;
    if(handlePassivePerceptionCheck){
        handlePassivePerceptionCheck(passPerceptionCheck);
      if(attrInput?.passPerc !== undefined){
        setPassPerception(attrInput.passPerc ? (basePerception + prof) : (basePerception));
      } else{
        setPassPerception(basePerception);
      }
    }
  }

  function updateInitiative() {
    if(handleInitiativeCheck){
      handleInitiativeCheck(initCheck);
      if(attrInput?.initiative !== undefined){
      setInitiative(attrInput.initiative ? (dexMod + prof) : dexMod);
      } else {
        setInitiative(dexMod);
      }
    }
  }

  const handleTogglePassivePerception = (event: ChangeEvent<HTMLInputElement>) => {
    setPassPerceptionCheck(event.target.checked);
  }

  const handleToggleInitiative = (event: ChangeEvent<HTMLInputElement>) => {
    setInitiativeCheck(event.target.checked);
  }

  const renderAttributeFields = () => {
    type AttributeKey = keyof typeof attrInput;

    return attributeNames.map((att) => (
      <div className="mb-4" key={att}>
        <InputAttributes
          placeholder={att}
          handleModifyAttribute={handleModifyAttribute}
          attributeInputData={attrInput ? attrInput[att as AttributeKey] : undefined}
          attributeOutputData={attrOutput ? attrOutput[att as AttributeKey] : undefined}
          proficiency={proficiency}
        />
      </div>
    ));
  };

  // const handlePassivePerceptionCheck = (event: ChangeEvent<HTMLInputElement>) => {
  //     setPassPerception(event.target.checked); // event.target.checked directly gives the new checked state
  // };

  return (
    <div className="card">
      <div className="border-2 border-gray-700  mb-2  text-center">
        Attributes
      </div>

      <div
        className="flex flex-wrap 
            justify-center 
            md:justify-around 
            gap-1"
      >
        {renderAttributeFields()}

        <div className="justify-center w-56 text-black">
          <div
            className="mb-2 bg-gray-400 pl-2 border-1 border-black
                    border-r-0 flex justify-end rounded-tr-lg"
          >
            <div className="pr-6">
              Passive Perception:
              <span className="ml-2">
                {passivePerception}
              </span>
            </div>
            <div className="relative">
              <input
                type="checkbox"
                className="absolute border-none top-0 right-0 "
                onChange={handleTogglePassivePerception}
              // testing purposes
              // onChange={handleTestValueChange}
              // testing purposes
              />
            </div>
          </div>

          <div
            className="mb-2 bg-gray-400 pl-2 border-1 border-black
                    border-r-0 flex justify-end rounded-tr-lg"
          >
            <div className="pr-6">
              Initiative:
              <span className="ml-2">
                {initiative >= 0 ? `+${initiative}` : initiative}
              </span>
            </div>
            <div className="relative">
              <input
                type="checkbox"
                className="absolute border-none top-0 right-0 "
                onChange={handleToggleInitiative}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attributes;
