import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../services/Actions/FetchDataAction";

// const API_URL = "https://jsonplaceholder.typicode.com/todos";

const FetchData = () => {
  const dispatch = useDispatch();

  const { loadDing, data, error } = useSelector((state) => state.fetchReducer);

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  return (
    <>
      <div>
        <h1>{loadDing && " LOADING DATA"}</h1>
        <div className="card-wrapper">
          {data &&
            data.map((value) => {
              const { id, title, userId, boolean } = value;
              return (
                <article>
                  <h1>{id}</h1>
                  <h3>{title}</h3>
                </article>
              );
            })}
        </div>
        <h3>{error}</h3>
      </div>
    </>
  );
};

export default FetchData;
