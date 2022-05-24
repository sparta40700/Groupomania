import React from "react";

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
            <a href="#">Mot de passe oublié ?</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SignUp;
