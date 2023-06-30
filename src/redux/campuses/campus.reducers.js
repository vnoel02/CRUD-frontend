import CampusActionType from "./campus.types";

export const INITIAL_STATE = {
    allCampuses: [],
    newCampus: [],
};

// action => {type, payload}, remember fetchAllCampuses function/action creator
const campusReducer = (state = INITIAL_STATE, action) => {
    console.log("IN CAMPUSREDUCER HANDLING ACTIONS")
    switch (action.type) {
        case CampusActionType.FETCH_ALL_CAMPUSES:
            return {
                ...state, allCampuses: action.payload
            };
        case CampusActionType.CREATE_NEW_CAMPUS:
            return{
                ...state, newCampus: action.payload
            };
        default:
            return state;
    }
};

export default campusReducer;