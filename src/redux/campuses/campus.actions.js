// This is where the api call from the database is made
import axios from "axios";


import CampusActionType from "./campus.types";

//action creator
export const fetchAllCampuses = (payload) => {
  console.log("FETCH ALL CAMPUSES ACTION");
  return {
    type: CampusActionType.FETCH_ALL_CAMPUSES,
    payload: payload,
  };
};

export const createNewCampus = (payload) => {
  console.log("CREATING NEW CAMPUS ACTION");
  return {
    type: CampusActionType.CREATE_NEW_CAMPUS,
    payload: payload,
  };
};

//thunk for api call

export const fetchAllCampusesThunk = () => {
  return async (dispatch) => {
    try {
      console.log("FETCHALLCAMPUSES THUNK IS FIRING");
      const response = await axios.get("http://localhost:4000/api/campuses");
      console.log("FETCHALLCAMPUSES THUNK COMPLETED");
      dispatch(fetchAllCampuses(response.data)); //dispatching the data
    } catch (error) {
      console.error(error);
    }
  };
};

export const createNewCampusThunk = (campusInfo) => {
  return async (dispatch) => {
    try {
      console.log("CREATENEWCAMPUS THUNK IS FIRING");
      const response = await axios.post("http://localhost:4000/api/campuses", {
        name: campusInfo.name,
        address: campusInfo.address,
        description: campusInfo.description
      });
      console.log("CREATENEWCAMPUS THUNK COMPLETED");
      console.log(campusInfo)
      dispatch(createNewCampus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
