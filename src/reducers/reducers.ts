export function itemsHasErrored(state, action) {
    debugger;
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}
export function itemsIsLoading(state, action) {
    debugger;
    switch (action.type) {
        case 'ITEMS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}
export function items(state, action) {
    debugger;
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.items;
        default:
            return state;
    }
}