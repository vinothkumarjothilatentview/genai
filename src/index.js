import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Secure from "./login_signup/secure";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Landing from "./landing";
import AuthValidator from "./login_signup/auth_validator";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div>
        <section>
          <Routes>
            <Route path="/secure" element={<Secure />} />
            <Route
              path="/"
              element={
                <AuthValidator>
                  <Landing />
                </AuthValidator>
              }
            />
          </Routes>
        </section>
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
