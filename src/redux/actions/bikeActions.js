import axios from "axios";
import { message } from "antd";
const API = axios.create({
  baseURL: "https://bikezzz.onrender.com/api",
});

export const getAllCars = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await API.get("bikes/getallbikes");

    dispatch({ type: "GET_ALL_CARS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (err) {
    console.log(err);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const addBike = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await API.post("/bikes/addbike", reqObj);

    dispatch({ type: "LOADING", payload: false });
    message.success("New Bike added successfully");
    setTimeout(() => {
      window.location.href = "/admin";
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const editBike = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await API.post("/bikes/editbike", reqObj);

    dispatch({ type: "LOADING", payload: false });
    message.success("Bike details updated successfully");
    setTimeout(() => {
      window.location.href = "/admin";
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};

export const deleteBike = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await API.post("/bikes/deletebike", reqObj);

    dispatch({ type: "LOADING", payload: false });
    message.success("Bike deleted successfully");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};