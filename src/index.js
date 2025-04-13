import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App222 from "./App222";
import Appu2 from "./unit_testing/Appu2";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import Test from "./Test";
import App65 from "./App65";
import App65_1 from "./App65_1";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    {/* <App16 /> */}
    {/* <App93 /> */}
    {/* </Provider> */}
    <App65_1 />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
