import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Profil from "./pages/profil";
import Actu from "./pages/actu";
// import { Redirect } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        {/* <switch> */}
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/actu" element={<Actu />} />
        {/* <Redirect to="/" /> */}
        {/* </switch> */}
      </Routes>
    </div>
  );
};

export default App;
