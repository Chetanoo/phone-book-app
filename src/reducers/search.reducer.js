import { searchConstants } from '../constants/search.constants'

const initialState = {
  searchResults: [],
  loading: false
}

export const search = (state = initialState, action) => {
  switch (action.type) {
    case searchConstants.SEARCH_REQUEST:
      return {
        ...state,
        loading: true
      }
    case searchConstants.SEARCH_SUCCESS:
      return {
        ...state,
        searchResults: action.searchResults,
        loading: false
      }
    case searchConstants.SEARCH_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    default:
      return state
  }
}
