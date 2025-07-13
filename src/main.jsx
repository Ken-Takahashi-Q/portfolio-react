import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import Home from "./Home";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Janken from "./Pages/Janken/Janken";
import Form from "./Pages/Form/Form";
import IPTracker from "./Pages/IP-Tracker/ip-tracker";
import Calculator from "./Pages/Calculator/Calculator";
import Todo from "./Pages/Todo/todo";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/janken" element={<Janken />} />
        <Route path="/multi-step-form" element={<Form />} />
        <Route path="/ip-tracker" element={<IPTracker />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
