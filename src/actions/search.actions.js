import { searchConstants } from '../constants/search.constants';
import { searchServices } from '../services/search.service';

export const search = requestData => {
    function request(requestData) { return { type: searchConstants.SEARCH_REQUEST, requestData}; }
    function success(searchResults) { return { type: searchConstants.SEARCH_SUCCESS, searchResults }; }
    function failure(error) { return { type: searchConstants.SEARCH_FAILURE, error }; }

    return dispatch => {
        dispatch(success(requestData))
        // searchServices.search(requestData).then()
    }
};

// export const searchActions = {
//     search,
// };
