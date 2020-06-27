import {counterConstants} from "../constants/counter.constants"

const initialState = {
    count: 0,
    isIncrementing: false,
    isDecrementing: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case counterConstants.INCREMENT_REQUESTED:
            return {
                ...state,
                isIncrementing: true
            }

        case counterConstants.INCREMENT:
            return {
                ...state,
                count: state.count + 1,
                isIncrementing: !state.isIncrementing
            }

        case counterConstants.DECREMENT_REQUESTED:
            return {
                ...state,
                isDecrementing: true
            }

        case counterConstants.DECREMENT:
            return {
                ...state,
                count: state.count - 1,
                isDecrementing: !state.isDecrementing
            }

        default:
            return state
    }
}
