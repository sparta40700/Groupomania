import React, { useState } from "react";
import SignUp from "./signup";
import SignIn from "./signin";

const log = (props) => {
  const [SignUpModal, setSignUpModal] = useState();
  const [SignInModal, setSignInModal] = useState();
  /* const handleLogin = (e) => {
    setSignUpModal(false);
    setSignInModal(true);
  };*/

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setSignUpModal(true);
      setSignInModal(false);
    } else if (e.target.id === "login") {
      setSignUpModal(false);
      setSignInModal(true);
    }
  };

  return (
    <div className="Connection_form">
      <div className="Form_container">
        <ul>
          <li
            onClick={handleModals}
            id="register"
            className={SignUpModal ? "active-btn" : null}
          >
            S'inscrire
          </li>
          <li
            onClick={handleModals}
            id="login"
            className={setSignInModal ? "active-btn" : null}
          >
            Se connecter
          </li>
        </ul>
        {SignUpModal && <SignUp />}
        {SignInModal && <SignIn />}
      </div>
    </div>
  );
};

export default log;
