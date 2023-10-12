export enum HumanActionTypes {
    FETCH_HUMAN = "FETCH_HUMAN",
    FETCH_HUMAN_SUCCESS = "FETCH_HUMAN_SUCCESS",
    FETCH_HUMAN_ERROR = "FETCH_HUMAN_ERROR",
}

interface FetchHumanAction {
    type: HumanActionTypes.FETCH_HUMAN;
}

interface FetchHumanSuccessAction {
    type: HumanActionTypes.FETCH_HUMAN_SUCCESS;
    payload: IHuman[];
}

interface FetchHumanErrorAction {
    type: HumanActionTypes.FETCH_HUMAN_ERROR;
    payload: string;
}

export interface IHuman {
    email: string,
    number: string
}

export interface HumanState {
    items: IHuman[] | null;
    loading: boolean;
    error: null | string;
}

export type HumanAction = FetchHumanAction | FetchHumanSuccessAction | FetchHumanErrorAction;