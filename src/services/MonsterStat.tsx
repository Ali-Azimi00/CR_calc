import React from 'react'

interface MonsterStatBlock {
  attributes: AttributesEtc;
  deffensive: Defensive;
  offensive: Offensive;
  
}

interface AttributesEtc {
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

interface Attr {
  value: number;
  save: boolean;
}

interface Defensive {

}

interface Offensive {

}

function getModifier(attribute:number){
  return Math.floor((attribute-10)/2);
}

const MonsterStats = () => {
  return (
    <div>object</div>
  )
}

export default MonsterStats