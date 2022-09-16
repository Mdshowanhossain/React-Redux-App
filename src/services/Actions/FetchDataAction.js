import axios from "axios";
import {
  FAILURE_DATA,
  LOAD_DATA,
  SUCCESS_DATA,
} from "../Constants/FetchDataConstant";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const getAllData = () => async (dispatch) => {
  dispatch({ type: LOAD_DATA });
  await axios
    .get(API_URL)
    .then((res) => dispatch({ type: SUCCESS_DATA, payload: res.data }))
    .catch((err) => dispatch({ type: FAILURE_DATA, payload: err.message }));
};
