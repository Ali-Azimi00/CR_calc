import React from 'react'

export class MonsterStatBlock {
  attributes?: AttributesEtc;
  defensive?: Defensive;
  offensive?: Offensive;
  
}

export interface AttributesEtc {
    STR?: Attr;
    DEX?: Attr;
    CON?: Attr;
    INT?: Attr;
    WIS?: Attr;
    CHA?: Attr;
    passPerc?: boolean;
    goalCR?: number;
    prof?: number;
    CR?: number;
}

export interface Attr {
  value: number;
  save: boolean;
}

export interface Defensive {

}

export interface Offensive {

}

function getModifier(attribute:number){
  return Math.floor((attribute-10)/2);
}


export function generateBlankStatblock(): MonsterStatBlock{
  return {
    attributes: {
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
    },
    defensive: {},
    offensive: {},
  }
}