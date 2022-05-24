import React from "react";
import Log from "../components/log";
import Header from "../components/header";
import Footer from "../components/footer";

const Profil = () => {
  return (
    <div className="Profil_page">
      <div className="log_container">
        <Log SignIn={false} SignUp={true} />
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
