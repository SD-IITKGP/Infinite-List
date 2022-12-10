import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/login";
import Layout from "../components/Layout";
export default function App() {
  const [Allow, changeAllow] = useState(false);

  function Authenticate(allow) {
    changeAllow(allow);
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login authenticate={Authenticate} />} />
          <Route
            path="home"
            element={<Home show={Allow} authenticate={Authenticate} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
