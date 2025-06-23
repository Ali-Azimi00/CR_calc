import { Size } from "./Constants";

export interface MonsterStatBlock {
    crDisplay?: CrDisplay;
    attributes?: AttributesInput;
    defensiveInput?: DefensiveInput;
    offensiveInput?: OffensiveInput;
}

export interface CrDisplay{
    cr?: number;
    goalCr?: number;
    prof?: number;
    defCr?: number;
    offCr?: number;
}

export interface AttributesInput {
    STR?: AttrInput;
    DEX?: AttrInput;
    CON?: AttrInput;
    INT?: AttrInput;
    WIS?: AttrInput;
    CHA?: AttrInput;
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

export interface AttrInput {
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

export interface DefensiveInput {
    hpInput?: HpInput;
}

export interface HpInput {
    hitDice?: number;
    size?: Size;
}

export interface DefensiveOutput {
    hpOutput?: HpOutput;
}

export interface HpOutput {
    totalHp?: number;
    effectiveHp?: number;
    hpString?: string;
}

export interface OffensiveInput {

}

export function getModifier(attribute:number){
  return Math.floor((attribute-10)/2);
}

// export enum Size {
//     Tiny = "Tiny",
//     Small = "Small",
//     Medium = "Medium",
//     Large = "Large",
//     Huge = "Huge",
//     Gargantuan = "Gargantuan"
// }

export function getProfByCR(cr: number): number {
    if (cr < 5) return 2; // Proficiency for CR 0-4
    if (cr < 9) return 3; // Proficiency for CR 5-8
    if (cr < 13) return 4; // Proficiency for CR 9-12
    if (cr < 17) return 5; // Proficiency for CR 13-16
    if (cr < 21) return 6; // Proficiency for CR 17-20
    if (cr < 25) return 7; // Proficiency for CR 21-24
    if (cr < 29) return 8; // Proficiency for CR 25-28
    else return 9; // Proficiency for CR 29+
}

export function getHitDieBySize(size: Size | string): number {
    if( size === "Tiny" || size === "d4") return 4; // d4 for Tiny
    if( size === "Small"|| size === "d6") return 6; // d6 for Small
    if( size === "Medium"|| size === "d8") return 8; // d8 for Medium
    if( size === "Large"|| size === "d10") return 10; // d10 for Large
    if( size === "Huge"|| size === "d12") return 12; // d12 for Huge
    if( size === "Gargantuan"|| size === "d20") return 20; // d20 for Gargantuan
    else return 0;
}

export function getAvgDieRoll(die: number | string | Size): number {
    console.log(`#### getAvgDieRoll called with die: ${die}`);
    console.log(`#### Type of die: ${typeof die}`);
    if (typeof die === "number") {
        console.log(`#### die is a number: ${die}`);
        return (die + 1) / 2;
    } else {
        return getAvgDieRoll(getHitDieBySize(die));
    }
}

export function getTotalHp(hitDice: number, size: Size, CON: number): number {
    return getAvgDieRoll(size)* hitDice + (getModifier(CON) * hitDice);
}

export function getHpString(hitDice: number, size: Size, CON: number): string {
    const conModifier = getModifier(CON);
    const hpModifierString = conModifier === 0 ? '' : ` + ${getModifier(CON) * hitDice}`
    // return `${getTotalHp(hitDice, size, CON)} (${hitDice}d${getHitDieBySize(size)} + ${getModifier(CON) * hitDice})`;
    return `${getTotalHp(hitDice, size, conModifier)} (${hitDice}d${getHitDieBySize(size)}${hpModifierString})`;
}


export function generateBlankCrDisplay(): CrDisplay {
    return {
        cr: 0,
        goalCr: 0,
        prof: 2,
    }
}

export const defaultAttributesInput: AttributesInput = {
//   return {
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
    // }  
}

export const defaultDefensiveInput: DefensiveInput = {
    hpInput: {
        hitDice: 1,
        size: Size.Medium,
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

export function generateDefultDefensiveOutput(): DefensiveOutput {
    return {
        hpOutput: {
            totalHp: 4,
            effectiveHp: 4,
            hpString: "4 (1d8)",
        },
    };
}
