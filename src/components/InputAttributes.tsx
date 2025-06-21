import React, { ChangeEvent, useState } from "react";
import { AttrInput, AttrOutput } from "../constants/MonsterStats";

interface InputFieldProps {
  placeholder?: string;
  individualStyles?: string;
  value?: string;
  handleModifyAttribute?: (
    attrName: string,
    newValue: number | boolean
  ) => void;
  attributeInputData?: AttrInput;
  attributeOutputData?: AttrOutput;
}

const InputAttributes: React.FC<InputFieldProps> = ({
  placeholder,
  individualStyles,
  handleModifyAttribute,
  value,
  attributeInputData,
  attributeOutputData,
}) => {
  const attributeName = placeholder || "";
  const [inputValue, setInputValue] = useState(attributeInputData?.value || 10);
  const [saveThrowBoolean, setSaveThrowBoolean] = useState(
    attributeInputData?.save || false
  );
  const modifier = attributeOutputData?.mod || 0;
  const modifierProf = attributeOutputData?.modProf || 0;
  const expertise = attributeOutputData?.expertise || 0;
  const saveValue = saveThrowBoolean ? modifierProf : modifier;

  const handleUpdateValue = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && handleModifyAttribute) {
      setInputValue(newValue);
    }

    if (handleModifyAttribute) handleModifyAttribute(attributeName, inputValue);
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSaveThrowBoolean(event.target.checked); // event.target.checked directly gives the new checked state
    if (handleModifyAttribute) {
      handleModifyAttribute(attributeName, !saveThrowBoolean); // Assuming save is a boolean, convert to 1 or 0
    }
  };

  // (document.getElementById('attributeInput') as HTMLInputElement).addEventListener('keydown', (event:KeyboardEvent)=>{
  //   if (event.key === 'Enter') {
  //     event.preventDefault();
  //     handleUpdateValue();
  //   }
  // });

  return (
    <div className="text-black">
      <div className="flex flex-row opacity-75  justify-end h-4 ">
        <div className="h-4 w-14 text-xs font-thin text-white pl-2">MOD</div>
        <div className="h-6 w-14 text-xs font-thin text-white pl-2">SAVE</div>
      </div>
      <div className="flex flex-row justify-end">
        <div
          className={`h-6 w-14 bg-gray-400 px-2 border-1 border-black
                    ${individualStyles}`}
        >
          {placeholder}
        </div>
        {/* INPUT ATTRIBUTE VALUE  */}
        <input
          className={`h-6 w-14 bg-gray-100 px-2 border-1 border-black
                        ${individualStyles}`}
          id="attributeInput"
          placeholder={"10"}
          value={inputValue}
          type="number"
          onChange={handleUpdateValue}
        ></input>
        <div
          className={`h-6 w-14 bg-gray-400 px-2 border-1 border-black
                    ${individualStyles}`}
        >
          {modifier >= 0 ? `+${modifier}` : modifier}
        </div>
        <div
          className={`h-6 w-14 bg-gray-400 pl-2 border-1 border-black
                    border-r-0 flex justify-between rounded-tr-lg
                    ${individualStyles}`}
        >
          <div className="">{saveValue >= 0 ? `+${saveValue}` : saveValue}</div>
          <div className="relative">
            <input
              type="checkbox"
              className="absolute border-none top-0 right-0 "
              onChange={handleCheckboxChange}
            />
          </div>
        </div>
      </div>

      {placeholder === "CON" ? (
        <div className="flex flex-row  opacity-75  justify-end">
          <div
            className={`bg-gray-400  h-5 w-42 px-4 rounded-bl-lg 
                    text-sm text-gray-700 justify-end 
                    ${individualStyles}`}
          >
            <div className="flex flex-row justify-between">
              <div>HP</div>
              <div>000(00d + 000)</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row  opacity-75  justify-end">
          <div
            className={`bg-gray-400  h-5 w-22 px-2 rounded-bl-lg 
                    text-sm text-gray-700 justify-end 
                    ${individualStyles}`}
          >
            expert:{" "}
            <span className="text-green-900">
              {expertise >= 0 ? `+${expertise}` : expertise}
            </span>
          </div>

          <div
            className={`bg-gray-100 h-5 w-20 px-2 
                text-sm text-gray-700 justify-end 
                    ${individualStyles}`}
          >
            skill:{" "}
            <span className="text-red-900">
              {modifierProf >= 0 ? `+${modifierProf}` : modifierProf}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputAttributes;
