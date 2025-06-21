


export enum AttributeNames {
    STR = "STR",
    DEX = "DEX",
    CON = "CON",
    INT = "INT",
    WIS = "WIS",
    CHA = "CHA",
}

export enum Size {
    Tiny = "Tiny",
    Small = "Small",
    Medium = "Medium",
    Large = "Large",
    Huge = "Huge",
    Gargantuan = "Gargantuan",
}

export enum DamageTypes {
    Acid = "Acid",
    Cold = "Cold",
    Fire = "Fire",
    Force = "Force",
    Lightning = "Lightning",
    Necrotic = "Necrotic",
    Poison = "Poison",
    Psychic = "Psychic",
    Radiant = "Radiant",
    Thunder = "Thunder",
    Bludgeoning = "Bludgeoning",
    Piercing = "Piercing",
    Slashing = "Slashing",
}

export enum DamageTypesSpecial {
    Acid = "Acid",
    Cold = "Cold",
    Fire = "Fire",
    Force = "Force",
    Lightning = "Lightning",
    Necrotic = "Necrotic",
    Poison = "Poison",
    Psychic = "Psychic",
    Radiant = "Radiant",
    Thunder = "Thunder",
}

export enum DamageTypesPhysical {
    Bludgeoning = "Bludgeoning",
    Piercing = "Piercing",
    Slashing = "Slashing",
}

export enum DieTypes {
    d2 = "d2",
    d3 = "d3",
    d4 = "d4",
    d6 = "d6",
    d8 = "d8",
    d10 = "d10",
    d12 = "d12",
    d20 = "d20",
    d100 = "d100",
}

export enum DieTypeToValue {
    d2 = 2,
    d3 = 3,
    d4 = 4,
    d6 = 6,
    d8 = 8,
    d10 = 10,
    d12 = 12,
    d20 = 20,
    d100 = 100,
}


export interface Dice {
    dietype: string;
    value: number;
}