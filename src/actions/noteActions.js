import axios from "axios";
import { GET_NOTES, NOTE_LOADING, SUCCESS_NOTE, TOGGLE_SUCCESS } from "./types";

//get all note
export const getNotes = () => dispatch => {
    const url = "";
    dispatch(setNoteLoading());

    axios
        .get(url)
        .then(res =>
            dispatch({
                type: GET_NOTES,
                payload: res.data
            })
        )
        .catch(err => dispatch({ type: GET_NOTES, payload: null }));
};

export const addNote = data => dispatch => {
    dispatch(setNoteLoading());
    axios
        .post("https://ehrwebpreprod.naiacorp.net/api/Notes/SaveNote", data)
        .then(res =>
            dispatch({
                type: SUCCESS_NOTE
            })
        )
        .catch(err => console.log(err));
};

export const setNoteLoading = () => {
    return {
        type: NOTE_LOADING
    };
};

export const toggleSuccess = () => {
    return {
        type: TOGGLE_SUCCESS
    };
};
