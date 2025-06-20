import { MonsterStatBlock, generateBlankStatblock } from "@/constants/MonsterStat";
import { createSlice } from "@reduxjs/toolkit";


const initialState: MonsterStatBlock = generateBlankStatblock();

const statblockSlice = createSlice({
    name: "statblock",
    initialState: generateBlankStatblock(),
    reducers: {
        
    }
})