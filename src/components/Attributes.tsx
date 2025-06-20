import React, { ChangeEvent, useState } from "react";
import InputAttributes from "./InputAttributes";
import { AttributesInput, AttributesOutput } from "../constants/MonsterStats";
// import OutputField from './outputField'
// import Dropdown from './Dropdown'

interface AttributesProps {
  proficiency?: number;
  attrInput?: AttributesInput;
  attrOutput?: AttributesOutput;
  handleModifyAttribute?: (attrName: string,newValue: number | boolean) => void;
  handlePassivePerceptionCheck?: (event: ChangeEvent<HTMLInputElement>) => void;
  handleInitiativeCheck?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Attributes: React.FC<AttributesProps> = ({
    proficiency,
    attrInput,
    attrOutput,
    handleModifyAttribute,
    handlePassivePerceptionCheck,
    handleInitiativeCheck,
    }) => {
  const attributeNames = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];
  const passivePerception = attrInput?.passPerc ? 10 + (attrOutput?.WIS?.modProf || 0) : 10 + (attrOutput?.WIS?.mod || 0);
  const initiative = attrInput?.initiative ? attrOutput?.DEX?.modProf || 0 : attrOutput?.DEX?.mod || 0;

  const renderAttributeFields = () => {
    type AttributeKey = keyof typeof attrInput;

    return attributeNames.map((att) => (
      <div className="mb-4" key={att}>
        <InputAttributes
          placeholder={att}
          handleModifyAttribute={handleModifyAttribute}
          attributeInputData={attrInput ? attrInput[att as AttributeKey] : undefined}
          attributeOutputData={attrOutput ? attrOutput[att as AttributeKey] : undefined}
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
                onChange={handlePassivePerceptionCheck}
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
                onChange={handleInitiativeCheck}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attributes;
