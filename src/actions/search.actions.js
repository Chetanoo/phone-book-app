import { searchConstants } from '../constants/search.constants'
import { searchServices } from '../services/search.service'

export const search = requestData => {
  function request() {
    return { type: searchConstants.SEARCH_REQUEST }
  }
  function success(searchResults) {
    return { type: searchConstants.SEARCH_SUCCESS, searchResults }
  }
  function failure(error) {
    return { type: searchConstants.SEARCH_FAILURE, error }
  }

  return dispatch => {
    dispatch(request())

    searchServices.search(requestData).then(
      data => dispatch(success(data)),
      error => dispatch(failure(error.toString()))
    )
  }
}

// export const searchActions = {
//     search,
// };
