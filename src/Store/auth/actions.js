import {AUTH_ACTIONS_TYPES} from "./action-types";

export const updateAuthStatus = (payload) => ({
    type: AUTH_ACTIONS_TYPES.UPDATE_STATUS,
    payload
})