import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ReducerComponent from "./Components/ReducerComponent";
import Context from "./Components/ContextComponent";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes, BrowserRouter, Link, Outlet } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const renderNav = () => {
  return (
    <div className="navbar">
      <nav>
        <h1>
          <Link to="/">
            <span>🏡</span> Houses.
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/context">Context</Link>
          </li>
          <li>
            <Link to="/reducer">Reducer</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
root.render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/" element={renderNav()}>
          <Route
            index
            path="/"
            element={
              <Suspense fallback={<div />}>
                <App />
              </Suspense>
            }
          />
          <Route
            path="/context"
            element={
              <Suspense fallback={<div />}>
                <Context />
              </Suspense>
            }
          />
          <Route
            path="/reducer"
            element={
              <Suspense fallback={<div />}>
                <ReducerComponent />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
