import {AUTH_ACTIONS_TYPES} from "./action-types";
import {BackendClient} from "../../Api/client.ts";

const initialState = {
    isAuth: false,
    backEndClient: new BackendClient("http://localhost:8001/v1")
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ACTIONS_TYPES.UPDATE_STATUS:
            return {...state, isAuth: action.payload}
        default:
            return state
    }
}