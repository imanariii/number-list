import {HumanAction, HumanActionTypes, HumanState} from "../../types/human";

const initialState:HumanState = {
    items: null,
    loading: false,
    error: null
}

export const humanReducer = (state= initialState, action:HumanAction):HumanState => {
    switch (action.type) {
        case HumanActionTypes.FETCH_HUMAN:
            return {loading:true, error:null, items: null}
        case HumanActionTypes.FETCH_HUMAN_SUCCESS:
            return {loading:false, error:null, items: action.payload}
        case HumanActionTypes.FETCH_HUMAN_ERROR:
            return {loading:false, error: action.payload, items: null}
        default:
            return {...state}
    }
}