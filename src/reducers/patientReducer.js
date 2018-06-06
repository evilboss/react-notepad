import { GET_PATIENT, PATIENT_LOADING } from "../actions/types";

const initialState = {
    patient: null,
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case PATIENT_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_PATIENT:
            return {
                ...state,
                loading: false,
                patient: action.payload
            };
        default:
            return state;
    }
}
