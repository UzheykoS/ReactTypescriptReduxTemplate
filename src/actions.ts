import { createAction, Action } from "redux-actions";
import {
    LOAD_ITEMS,
    LOAD_ITEMS_FULFILLED,
    LOAD_ITEMS_REJECTED,
    SHOW_BUSY
} from './actionTypes';

export const ProcessFetchData = (url: string) => {
    return async (dispatch) => {
        dispatch(itemsIsLoading(true));
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            dispatch(itemsIsLoading(false));
            const items = await response.json();
            dispatch(itemsFetchDataSuccess(items));
        }
        catch (ex) {
            dispatch(itemsHasErrored(true));
            console.log(ex);
        }
    };
};

export const ProcessFetchDataFake = () => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(itemsHasErrored(true));
        }, 5000);
    };
}

export const itemsHasErrored = createAction(LOAD_ITEMS_REJECTED, (hasErrored: boolean) => hasErrored);

export const itemsIsLoading = createAction(LOAD_ITEMS, (isLoading: boolean) => isLoading);

export const itemsFetchDataSuccess = createAction(LOAD_ITEMS_FULFILLED, (items: any[]) => items);

export const ShowBusy = createAction(SHOW_BUSY, (isBusy: boolean) => isBusy);
