import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="Connection_form">
      <div className="container">
        <ul>
          <li>
            <h1>Inscription</h1>
          </li>
          <li>
            <input type="text" placeholder="Pseudo" />
          </li>
          <li>
            <input type="password" placeholder="Mot de passe" />
          </li>
          <li>
            <input type="submit" value="S'inscrire" />
          </li>
          <li>
            <Link to="/"> mot de passe oublié</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SignUp;
