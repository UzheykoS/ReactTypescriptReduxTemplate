import { handleActions, Action } from "redux-actions";
import {
    LOAD_ITEMS,
    LOAD_ITEMS_FULFILLED,
    LOAD_ITEMS_REJECTED,
    SHOW_BUSY
} from "./actionTypes";

import initialState from './store/initialState';

export default handleActions({
    [LOAD_ITEMS]: (state, action) => {
        return Object.assign({}, state, {
            isLoading: action.payload
        });        
    },
    [LOAD_ITEMS_FULFILLED]: (state, action) => {
        return Object.assign({}, state, {
            items: action.payload
        });        
    },
    [LOAD_ITEMS_REJECTED]: (state, action) => {
        return Object.assign({}, state, {
            hasErrored: action.payload
        });
    },  
    [SHOW_BUSY]: (state, action: any) => {
        const isBusy = action.payload;
        return { ...state, isBusy };
    }
}, initialState);
