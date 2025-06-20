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
    STR?: AttrValues;
    DEX?: AttrValues;
    CON?: AttrValues;
    INT?: AttrValues;
    WIS?: AttrValues;
    CHA?: AttrValues;
    passPerc?: number;
    initiative?: number;

}

export interface Attr {
  value?: number;
  save?: boolean;
}

export interface AttrValues {
    value: number;
    mod: number;
    saveMod: number;
    skillMod: number;
    expertise: number;
}

    // goalCR?: number;
    // prof?: number;
    // CR?: number;

export interface Defensive {

}

export interface Offensive {

}

function getModifier(attribute:number){
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