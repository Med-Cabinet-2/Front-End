import { FETCH_DATA, UPDATE_STRAIN, SET_ERROR } from "../actions";

const initialState = {
  isFetchingData: false,
  error: "",
  strains: [{
    name: "weed",
    effects: ["chill"]
  }, {
    name: "weed 2",
    effects: ["pain", "anxiety"]
  }]

};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        character: {}
      }

    case UPDATE_STRAIN:
      return {
        ...state,
        strain: action.payload,
        isFetchingData: false
      }

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        isFetchingData: false
      }
    default:
      return state
  }
}
