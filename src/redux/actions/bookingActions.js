import axios from "axios";
import { message } from "antd";
const API = axios.create({
  baseURL: "https://bikezzz.onrender.com/api",
});

export const BookCar = (reqObj) => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    await API.post("/bookings/bookbike", reqObj);

    dispatch({ type: "LOADING", payload: false });
    message.success("Your purchase is Successful");
  } catch (err) {
    console.log(err);
    dispatch({ type: "LOADING", payload: false });
    message.error("Something went wrong , please try later");
  }
};

export const getAllBookings = () => async (dispatch) => {
  dispatch({ type: "LOADING", payload: true });

  try {
    const response = await API.get("bookings/getallbookings");
    console.log(response);
    dispatch({ type: "GET_ALL_BOOKINGS", payload: response.data });
    dispatch({ type: "LOADING", payload: false });
  } catch (err) {
    console.log(err);
    dispatch({ type: "LOADING", payload: false });
  }
};