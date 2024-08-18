import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components

import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

// The view

import Contacts from "./view/Contacts/index";
import TopRate from "./view/TopRate/index";
import Home from "./view/Home/index";
import AdminPanel from "./view/Admin";
import Login from "./view/Login";
import Register from "./view/Register";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogin = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/toprate" element={<TopRate />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/admin"
            element={
              token ? (
                <AdminPanel token={token} />
              ) : (
                <Route path="/login" element={<Login setToken={handleLogin} />} />
              )
            }
          />
          <Route path="/login" element={<Login setToken={handleLogin} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
