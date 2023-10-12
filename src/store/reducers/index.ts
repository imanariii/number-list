import {combineReducers} from "redux";
import {humanReducer} from "./humanReducer";


export const rootReducer = combineReducers({
    human: humanReducer,
})

export type RootState = ReturnType<typeof rootReducer>