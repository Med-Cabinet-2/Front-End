import axios from "axios"

export const FETCH_DATA = "FETCH_DATA";
export const ed1t = "ED1T"
export const SET_ERROR = "SET_ERROR";
export const POST_DATA = "POST_DATA"
export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("ed1t")
    .then(res => {
      console.log("api res in getData", res)
      dispatch({ type: ed1t, payload: res.data });
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err);
      dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
    });
};

export const postData = (ed1t) => dispatch => {
  console.log("ed1t inside postData", ed1t)
  dispatch({ type: POST_DATA })
  axios
    .post("ed1t")
    .then(res => {
      dispatch({ type: ed1t, payload: res.data })
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err);
      dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
    });
}

export const deleteData = (id) => dispatch => {
  console.log(id)
  axios
    .delete(`ed1t`)
    .then(res => {
      dispatch({ type: ed1t, payload: res.data });
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err);
      dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
    });
}

export const updateData = (ed1t => dispatch => {
  console.log(ed1t)
  axios
    .put(`ed1y`, ed1t)
    .then(res => {
      getData()
    })
    .catch(err => {
      getData()
    });
})
