import { API } from '../constants/constants'

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        console.log('401')
      }

      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }

    return data
  })
}

const search = data => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }

  return fetch(`${API}/search`, requestOptions).then(handleResponse)
}

const create = data => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }

  return fetch(`${API}/create`, requestOptions).then(handleResponse)
}

export const searchServices = {
  search,
  create
}
