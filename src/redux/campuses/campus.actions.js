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

// Delete - delete a campus action creator
export const deleteCampus = (payload) => {
  console.log("CREATING NEW DELETE CAMPUS ACTION");
  return {
    type: CampusActionType.DELETE_CAMPUS,
    payload: payload,
  };
};


// Get - single campus

export const fetchSingleCampus = (payload) => {
    console.log("FETCH SINGLE CAMPUSES ACTION");
    return {
      type: CampusActionType.FETCH_SINGLE_CAMPUS,
      payload: payload,
    };
  };
  
  // Update - update campus action creator

export const updateCampus = (payload) => {
    console.log("Creating new update campus action")
    return {
        type: CampusActionType.UPDATE_CAMPUS,
        payload: payload,
    }
}


//thunks for api calls

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

// Post - create a new campus in all campus view

export const createNewCampusThunk = (campusInfo) => {
  return async (dispatch) => {
    try {
      console.log("CREATENEWCAMPUS THUNK IS FIRING");
      const response = await axios.post("http://localhost:4000/api/campuses", {
        name: campusInfo.name,
        address: campusInfo.address,
        // imageUrl: "hello",
        description: campusInfo.description,
      });
      console.log("CREATENEWCAMPUS THUNK COMPLETED");
      console.log(campusInfo);
      dispatch(createNewCampus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

// Delete - delete a campus in all campus view

export const deleteCampusThunk = (id, campusInfo) => {
  return async (dispatch) => {
    try {
      console.log("DELETE CAMPUS THUNK IS FIRING");
      const response = await axios.delete(
        `http://localhost:4000/api/campuses/delete/${id}`
      );
      console.log("DELETE CAMPUS THUNK COMPLETED");
      dispatch(deleteCampus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

// Get - get a single campus

export const fetchSingleCampusThunk = (id) => {
  return async (dispatch) => {
    try {
        console.log("FETCH SINGLE CAMPUS THUNK IS FIRING");
        const response  = await axios.get(`http://localhost:4000/api/campuses/get/${id}`)
        console.log("FETCH SINGLE CAMPUS THUNK COMPLETED");
        dispatch(fetchSingleCampus(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};

// Update - update a campus thunk

export const updateCampusThunk = (campusID, campusInfo) => {
    return async (dispatch) => {
        try {
            console.log("UPDATE CAMPUS THUNK IS FIRING");
            const response = await axios.put(`http://localhost:4000/api/campuses/edit/${campusID}`, {
                name: campusInfo.name,
                address: campusInfo.address,
                imageUrl: campusInfo.imageUrl,
                description: campusInfo.description
            });
            console.log("UPDATE CAMPUS THUNK COMPLETED");
            dispatch(updateCampus(response.data))
        } catch (error) {
            console.log(error)
        }
    }
}