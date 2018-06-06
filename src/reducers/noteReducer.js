import {
    GET_NOTES,
    GET_NOTE,
    NOTE_LOADING,
    SUCCESS_NOTE,
    TOGGLE_SUCCESS
} from "../actions/types";

const initialState = {
    notes: null,
    note: null,
    loading: false,
    success: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SUCCESS_NOTE:
            return {
                ...state,
                success: true,
                loading: false
            };
        case TOGGLE_SUCCESS:
            return {
                ...state,
                success: false
            };
        case NOTE_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_NOTE:
            return {
                ...state,
                note: action.payload,
                loading: false
            };
        case GET_NOTES:
            return {
                ...state,
                notes: action.payload,
                loading: false
            };
        default:
            return state;
    }
}
