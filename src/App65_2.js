//Axios is a popular JavaScript library for making HTTP requests
//(like fetch but with more features). It's commonly used in React apps to talk to APIs.

//🔄 What are Axios Interceptors?
//Interceptors are functions that Axios runs before a request is sent or after
// a response is received.
//Think of them like middleware that let you:
//Add headers (like auth tokens) before a request goes out.
//Handle or transform responses globally.
//Catch and handle errors in one place (instead of inside every .catch()).

//🛫Request Interceptor:
//Used to modify or log the request before it is sent.

axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // Add auth token if exists
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },

  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

//🛬 Response Interceptor:
//Used to handle responses or errors globally.

axios.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // Just return the response if no change
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401) {
      // Redirect to login or show a modal
      console.log("Unauthorized, redirecting...");
    }
    return Promise.reject(error);
  }
);

//💡How to Use in React:
//You usually set up interceptors once, e.g., in App.js or a custom axiosInstance.js.

// api/axiosInstance.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://your-api-url.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(/* ... */);
instance.interceptors.response.use(/* ... */);

export default instance;

//Then use it in your components:

import axiosInstance from "./api/axiosInstance";

const fetchData = async () => {
  const response = await axiosInstance.get("/data");
  console.log(response.data);
};
