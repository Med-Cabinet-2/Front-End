import { FETCH_DATA, UPDATE_STRAINS, UPDATE_SAVEDSTRAINS, SET_ERROR } from "../actions";

const initialState = {
  isFetchingData: false,
  error: "",
  strains: [{
    strain_id: 1,
    strain_name: "Cracker-Jack",
    strain_type: "sativa",
    strain_description: "this"
  }],

  savedStrains: [{
    strain_id: 1,
    strain_name: "Cracker-Jack-2",
    strain_type: "sativa",
    strain_description: "this"
  }]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STRAINS:
      console.log(action.payload)
      return {
        ...state,
        strains: action.payload,
        isFetchingData: false
      }


    case UPDATE_SAVEDSTRAINS:
      console.log("action payload inside update_savedstrains", action.payload)
      return {
        ...state,
        savedStrains: action.payload,
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
