import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App222 from "./App222";
import Appu2 from "./unit_testing/Appu2";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store";
import App44 from "./App44";
import App46 from "./App46";
import App227 from "./App227";
import App83 from "./App83";
import App228 from "./App228";
import App229 from "./App229";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <App16 />
    </Provider> */}
    <App229 />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
