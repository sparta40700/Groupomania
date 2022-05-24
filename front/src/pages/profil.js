import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Profil = () => {
  return (
    <div className="Profil_page">
      <div className="log_container">
        <Header />
        <div className="img_container">
          <img src="..\front\public\img\icon-above-font.png" alt="profil" />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Profil;
