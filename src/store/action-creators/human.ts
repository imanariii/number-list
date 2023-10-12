import {Dispatch} from "redux";
import {HumanAction, HumanActionTypes} from "../../types/human";
import axios from "axios";

interface IProps {
    email: string,
    number: string | null
}

export const fetchHuman = (data: IProps) => {
    return async (dispatch: Dispatch<HumanAction>) => {
        try {
            dispatch({type: HumanActionTypes.FETCH_HUMAN})
            const response = await axios.post('http://localhost:8080/api/user', data)
            dispatch({
                type: HumanActionTypes.FETCH_HUMAN_SUCCESS,
                payload: response.data
            })
        } catch (e) {
            dispatch({type: HumanActionTypes.FETCH_HUMAN_ERROR, payload: "Ошибка при загрузке юзера"})
        }
    }
}