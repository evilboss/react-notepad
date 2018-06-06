import { combineReducers } from "redux";
import note from "./noteReducer";
import reason from "./reasonReducer";
import notetype from "./noteTypeReducer";
import patient from "./patientReducer";

export default combineReducers({ note, notetype, reason, patient });
