import React from 'react'

export interface MonsterStatBlock {
  attributes?: AttributesInput;
  defensive?: Defensive;
  offensive?: Offensive;
  
}

export interface AttributesInput {
    STR?: Attr;
    DEX?: Attr;
    CON?: Attr;
    INT?: Attr;
    WIS?: Attr;
    CHA?: Attr;
    passPerc?: boolean;
    initiative?: boolean;
}

export interface AttributesOutput {
    STR?: AttrOutput;
    DEX?: AttrOutput;
    CON?: AttrOutput;
    INT?: AttrOutput;
    WIS?: AttrOutput;
    CHA?: AttrOutput;
    passPerc?: number;
    initiative?: number;

}

export interface Attr {
  value?: number;
  save?: boolean;
}

export interface AttrOutput {
    value?: number;
    mod?: number;
    modProf?: number;
    expertise?: number;
}

    // goalCR?: number;
    // prof?: number;
    // CR?: number;

export interface Defensive {

}

export interface Offensive {

}

export function getModifier(attribute:number){
  return Math.floor((attribute-10)/2);
}


export function generateAttributesInput(): AttributesInput{
  return {
      STR: {
        value: 10,
        save: false,
      },
      DEX: {
        value: 10,
        save: false,
      },
      CON: {
        value: 10,
        save: false,
      },
      INT: {
        value: 10,
        save: false,
      },
      WIS: {
        value: 10,
        save: false,
      },
      CHA: {
        value: 10,
        save: false,
      },
      passPerc: false,
      initiative: false,
    }  
}



export function generateAttributesOutput(attributes: AttributesInput, proficiency:number): AttributesOutput {
    const output: AttributesOutput = {};
    type AttributeKey = keyof typeof attributes;
    for (const key in attributes) {
        const attr = attributes[key as AttributeKey];
        if (attr && typeof attr === 'object') {
            const value = attr.value;
            const mod = value ? getModifier(value) : 0;
            output[key as keyof Omit<AttributesInput, "passPerc" | "initiative">] = {
                value: value || 10,
                mod: mod,
                modProf: mod + proficiency,
                expertise: mod + proficiency*2,
            };
        } else if (key === "passPerc" || key === "initiative") {
            output[key as "passPerc" | "initiative"] = 0;
        }
    }
    return output;
}
