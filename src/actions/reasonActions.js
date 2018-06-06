import axios from "axios";
import { GET_REASON } from "./types";

//get all reason code
export const getReason = () => dispatch => {
    axios
        .get("https://ehrwebpreprod.naiacorp.net/api/Notes/GetAllReasonCodes")
        .then(res =>
            dispatch({
                type: GET_REASON,
                payload: res.data
            })
        )
        .catch(err => dispatch({ type: GET_REASON, payload: null }));
};
