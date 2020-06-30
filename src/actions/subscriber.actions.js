import { subscriberConstants } from '../constants/subscriber.constants'
import { searchServices } from '../services/subscriber.service'

export const search = requestData => {
  function request() {
    return { type: subscriberConstants.SEARCH_REQUEST }
  }
  function success(searchResults) {
    return { type: subscriberConstants.SEARCH_SUCCESS, searchResults }
  }
  function failure(error) {
    return { type: subscriberConstants.SEARCH_FAILURE, error }
  }

  return dispatch => {
    dispatch(request())

    searchServices.search(requestData).then(
      data => dispatch(success(data)),
      error => dispatch(failure(error.toString()))
    )
  }
}

export const create = requestData => {
  function request() {
    return { type: subscriberConstants.CREATE_REQUEST }
  }
  function success(subscriber) {
    return { type: subscriberConstants.CREATE_SUCCESS, subscriber }
  }
  function failure(error) {
    return { type: subscriberConstants.CREATE_FAILURE, error }
  }

  return dispatch => {
    dispatch(request())

    searchServices.create(requestData).then(
      createdSubscriber => dispatch(success(createdSubscriber)),
      error => dispatch(failure(error.toString()))
    )
  }
}
