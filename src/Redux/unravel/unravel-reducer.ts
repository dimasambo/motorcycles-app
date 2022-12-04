import {ItemType, SearchedData} from "../../types/types";
import {BaseThunkType, InferActionsTypes} from "../redux-store";
import {api} from "../../api/api";

const initialState = {
    items: [] as Array<ItemType>,
    searchedItems: [] as Array<ItemType>,
    totalItems: 0
}

export type InitialStateType = typeof initialState

const unravelReducer = (state = initialState, action: ActionsType): InitialStateType => {

    switch (action.type) {
        case 'UNRAVEL/SET_DATA':
            return {
                ...state,
                items: [...state.items, ...action.payload.data],
                searchedItems: []
            }
        case 'UNRAVEL/SET_SEARCHED_DATA':
            return {
                ...state,
                searchedItems: [...action.payload.data.results],
                totalItems: action.payload.data.total,
                items: []
            }
        case 'UNRAVEL/ADD_SEARCHED_DATA':
            return {
                ...state,
                searchedItems: [...state.searchedItems, ...action.payload.data.results],
                items: []
            }
        default:
            return state;
    }
}

type ActionsType = InferActionsTypes<typeof actions>

export const actions = {
    setData: (data: Array<ItemType>) => (
        {
            type: 'UNRAVEL/SET_DATA',
            payload: {data}
        } as const
    ),
    setSearchedData: (data: SearchedData) => (
        {
            type: 'UNRAVEL/SET_SEARCHED_DATA',
            payload: {data}
        } as const
    ),
    addSearchedData: (data: SearchedData) => (
        {
            type: 'UNRAVEL/ADD_SEARCHED_DATA',
            payload: {data}
        } as const
    )
}

type ThunkType = BaseThunkType<ActionsType>

export const requestData = (page: number): ThunkType => {
    return async (dispatch) => {
        const data: Array<ItemType> = await api.getData(page);
        dispatch(actions.setData(data));
    }
}

export const requestSearchedData = (page: number, text: string, type: 'add' | 'set'): ThunkType => {
    return async (dispatch) => {
        const data: SearchedData = await api.getSearchedData(page, 20, text);
        if (type === "set") {
            dispatch(actions.setSearchedData(data));
        } else {
            dispatch(actions.addSearchedData(data));
        }
    }
}

export default unravelReducer;