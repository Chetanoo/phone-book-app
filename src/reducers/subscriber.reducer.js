import { subscriberConstants } from '../constants/subscriber.constants'

const initialState = {
  searchResults: [],
  createdSubscriber: {},
  loading: false,
  created: false,
  error: ''
}

export const subscriber = (state = initialState, action) => {
  switch (action.type) {
    case subscriberConstants.SEARCH_REQUEST:
      return {
        ...state,
        loading: true
      }
    case subscriberConstants.SEARCH_SUCCESS:
      return {
        ...state,
        searchResults: action.searchResults,
        loading: false
      }
    case subscriberConstants.SEARCH_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false
      }
    case subscriberConstants.CREATE_REQUEST:
      return {
        ...state,
        loading: true,
        created: false
      }
    case subscriberConstants.CREATE_SUCCESS:
      return {
        ...state,
        createdSubscriber: action.createdSubscriber,
        loading: false,
        created: true
      }
    case subscriberConstants.CREATE_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
        created: false
      }
    default:
      return state
  }
}
