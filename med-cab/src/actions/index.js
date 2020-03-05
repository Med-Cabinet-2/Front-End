import { axiosWithAuth } from "../utils/axiosWithAuth"

export const FETCH_DATA = "FETCH_DATA";
export const ed1t = "ED1T"
export const UPDATE_STRAINS = "UPDATE_STRAINS"
export const UPDATE_SAVEDSTRAINS = "UPDATE_SAVEDSTRAINS"
export const SET_ERROR = "SET_ERROR";
export const POST_DATA = "POST_DATA"

export const getStrainData = () => dispatch => {
  axiosWithAuth()
    .get(`/api/strains`)
    .then(res => {
      console.log("api res in getStrainData", res)
      dispatch({ type: UPDATE_STRAINS, payload: res.data });
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err);
      dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
    });
}

export const getSavedStrainData = (id) => dispatch => {
  console.log("receiving this id in getSavedStrainData", id)
  axiosWithAuth()
    .get(`/api/users/${id}/strains`)
    .then(res => {
      console.log("api res in getSavedStrainData", res)
      dispatch({ type: UPDATE_SAVEDSTRAINS, payload: res.data });
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err);
      dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
    });
};

export const addSavedStrainData = (id, obj) => dispatch => {
  const strainToSave = {
    strainID: obj
  }
  console.log("receiving this id and obj in addSavedStrainData", id, obj)
  axiosWithAuth()
    .post(`/api/users/${id}/strains`, strainToSave)
    .then(res => {
      console.log("apis res in updateSavedStrainData", res)
      getSavedStrainData()
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err);
      dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
    });
}

export const removeSavedStrainData = (id, obj) => dispatch => {
  const strainToSave = {
    strainID: obj
  }
  console.log("receiving this id and obj in addSavedStrainData", id, obj)
  axiosWithAuth()
    .delete(`/api/users/${id}/strains`, strainToSave)
    .then(res => {
      console.log("apis res in updateSavedStrainData", res)
      getSavedStrainData()
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err);
      dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
    });
  // const strainToDelete = {
  //   strainID: obj
  // }
  // console.log("receiving this id and obj in removeSavedStrainData", id, obj)
  // axiosWithAuth()
  //   .delete(`/api/users/${id}/strains`, strainToDelete)
  //   .then(res => {
  //     console.log("apis res in removeSavedStrainData", res)
  //     getSavedStrainData(id)
  //   })
  //   .catch(err => {
  //     console.error("error fetching data from api, err: ", err);
  //     dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
  //   });
}

export const updateEmail = (id, email) => dispatch => {
  axiosWithAuth()
    .put(`/api/users/${id}/email`, email)
    .then(res => {
      console.log("apis res in updateEmail", res)
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err);
      dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
    });
}

// export const postData = (ed1t) => dispatch => {
//   console.log("ed1t inside postData", ed1t)
//   dispatch({ type: POST_DATA })
//   axiosWithAuth()
//     .post("ed1t")
//     .then(res => {
//       dispatch({ type: ed1t, payload: res.data })
//     })
//     .catch(err => {
//       console.error("error fetching data from api, err: ", err);
//       dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
//     });
// }

// export const deleteData = (id) => dispatch => {
//   console.log(id)
//   axiosWithAuth()
//     .delete(`ed1t`)
//     .then(res => {
//       dispatch({ type: ed1t, payload: res.data });
//     })
//     .catch(err => {
//       console.error("error fetching data from api, err: ", err);
//       dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
//     });
// }

// export const updateData = (ed1t => dispatch => {
//   console.log(ed1t)
//   axiosWithAuth()
//     .put(`ed1y`, ed1t)
//     .then(res => {
//       getData()
//     })
//     .catch(err => {
//       getData()
//     });
// })
