import {
  FAILURE_DATA,
  LOAD_DATA,
  SUCCESS_DATA,
} from "../Constants/FetchDataConstant";

const initialState = {
  loadDing: true,
  data: [],
  error: null,
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return {
        ...state,
        loadDing: true,
      };
    case SUCCESS_DATA:
      return {
        ...state,
        loadDing: false,
        data: action.payload,
      };
    case FAILURE_DATA:
      return {
        ...state,
        data: [],
        loadDing: action.payload,
      };

    default:
      return state;
  }
};
