import { GET_REASON } from "../actions/types";

const initialState = {
    reason: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_REASON:
            return {
                ...state,
                reason: action.payload
            };
        default:
            return state;
    }
}
