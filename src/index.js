import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Contact from "./Components/Contact";
import About from "./Components/About";
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
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
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
            path="/about"
            element={
              <Suspense fallback={<div />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<div />}>
                {" "}
                <Contact />{" "}
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
