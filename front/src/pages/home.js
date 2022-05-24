import React from "react";
import Log from "../components/log/Log";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home_container">
        <div className="home_container_text">
          <h1>Bienvenue sur le site de Groupomania</h1>
          <p>
            Groupomania votre réseau social entreprise. Vous pouvez y trouver
            des informations sur votre entreprise et échanger avec vos
            collègues.
          </p>
        </div>
        <div className="home_container_img">
          <img src="../front/public/img/icon-above-font.png" alt="profil" />
        </div>
        <Log SignIn={false} SignUp={true} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
