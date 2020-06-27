import { searchConstants } from "../constants/search.constants";

const initialState = {
    searchResults: [],
};

export const search = (state = initialState, action) => {
    switch (action.type) {
        case searchConstants.SEARCH_REQUEST:
            return {
                ...state,
            }
        case searchConstants.SEARCH_SUCCESS:
            let newResults = [...state.searchResults]
            newResults.push(action.searchResults)
            return {
                ...state,
                searchResults: newResults
            }
        case searchConstants.SEARCH_FAILURE:
            return {
                ...state,
            }
        default:
            return state
    }
}
