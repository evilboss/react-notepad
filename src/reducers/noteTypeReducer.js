import { GET_NOTETYPE } from "../actions/types";

const initialState = {
    notetype: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_NOTETYPE:
            return {
                ...state,
                notetype: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
