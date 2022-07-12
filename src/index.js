import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { HomeContainer } from "./containers/HomeContainer";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import { VoteContainer } from "./containers/VoteContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeContainer />} />
          <Route path="features" element={<VoteContainer />} />
          <Route path="commands" element={<VoteContainer />} />
          {/* <Route
            path="vote"
            element={<Navigate to={links.topgg} />}
          /> */}
          {/* <Route path="uptime" element={<VoteContainer />} /> */}
          {/* <Route path="support" element={<VoteContainer />} /> */}
          {/* <Route
            path="invite"
            element={<Navigate to={links.topgg + "/invite"} />}
          /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
