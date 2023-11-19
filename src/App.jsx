import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { HashRouter, NavLink, Route, Routes } from "react-router-dom";
import Calculadora from "./pages/Calculadora";
import Calendario from "./pages/Calendario";
import Home from "./pages/Home";
import Notas from "./pages/Notas";
import Tareas from "./pages/TodoList";
import { AiTwotoneHome, AiFillCalculator } from "react-icons/ai";
import { BsFillCalendarDayFill } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";

function App() {
  return (
    <div className="App">

      <HashRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse mt-3 mt-lg-0" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-1">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/"><AiTwotoneHome /> Inicio</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/calculadora"><AiFillCalculator /> Calculadora</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/notas"><GiNotebook /> Notas</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/tareas"><FaTasks /> Tareas</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/calendario"><BsFillCalendarDayFill /> Calendario</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/calculadora" element={<Calculadora />} />
          <Route path="/notas" element={<Notas />} />
          <Route exact path="/tareas" element={<Tareas />} />
          <Route path="/calendario" element={<Calendario />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
