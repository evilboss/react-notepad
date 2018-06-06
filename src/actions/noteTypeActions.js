import axios from "axios";
import { GET_NOTETYPE } from "./types";

//get all reason code
export const getNoteType = () => dispatch => {
    axios
        .get("https://ehrwebpreprod.naiacorp.net/api/Notes/GetAllNoteTypes")
        .then(res =>
            dispatch({
                type: GET_NOTETYPE,
                payload: res.data
            })
        )
        .catch(err => dispatch({ type: GET_NOTETYPE, payload: null }));
};
