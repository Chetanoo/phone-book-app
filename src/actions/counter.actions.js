import { counterConstants } from "../constants/counter.constants";

export const increment = () => {
    return dispatch => {
        dispatch({
            type: counterConstants.INCREMENT_REQUESTED
        })

        dispatch({
            type: counterConstants.INCREMENT
        })
    }
};

export const incrementAsync = () => {
    return dispatch => {
        dispatch({
            type: counterConstants.INCREMENT_REQUESTED
        })

        return setTimeout(() => {
            dispatch({
                type: counterConstants.INCREMENT
            })
        }, 3000)
    }
}

export const decrement = () => {
    return dispatch => {
        dispatch({
            type: counterConstants.DECREMENT_REQUESTED
        })

        dispatch({
            type: counterConstants.DECREMENT
        })
    }
}

export const decrementAsync = () => {
    return dispatch => {
        dispatch({
            type: counterConstants.DECREMENT_REQUESTED
        })

        return setTimeout(() => {
            dispatch({
                type: counterConstants.DECREMENT
            })
        }, 3000)
    }
}
