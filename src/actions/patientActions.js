import axios from "axios";
import { GET_PATIENT, PATIENT_LOADING } from "./types";

//get all patient by parameter code
export const getPatient = patientData => dispatch => {
    const { firstname, lastname, phonenumber, dob } = patientData;
    const url = `https://patientportalwebservicepreprod.naiacorp.net/api/PatientEHR/GetPatientsBySearchParameters?firstName=${firstname}&lastName=${lastname}&dateOfBirth=${dob}&age=&emailAddress=&phoneNumber=${phonenumber}&pcpId=`;
    dispatch(setPatientLoading());

    axios
        .get(url)
        .then(res =>
            dispatch({
                type: GET_PATIENT,
                payload: res.data
            })
        )
        .catch(err => dispatch({ type: GET_PATIENT, payload: null }));
};

export const setPatientLoading = () => {
    return {
        type: PATIENT_LOADING
    };
};
