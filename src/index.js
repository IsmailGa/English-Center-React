import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route , Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


// Components

import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

// The view

import Contacts from "./view/Contacts/index";
import TopRate from "./view/TopRate/index";
import Home from "./view/Home/index";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <div className="wrapper">
  <Header/>
    <Routes>
      <Route exact path="/contacts" element={<Contacts />} />
      <Route exact path="/toprate" element={<TopRate />} />
      <Route path="/" element={<Home  />} />
    </Routes>
    <Footer/>
    </div>
  </BrowserRouter>
);
