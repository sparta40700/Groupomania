import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const Log = (props) => {
  const [signUpModal, setSignUpModal] = useState(props.SignUp);
  const [signInModal, setSignInModal] = useState(props.SignIn);
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
            className={signUpModal ? "active-btn" : null}
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
        {signUpModal && <SignUp />}
        {signInModal && <SignIn />}
      </div>
    </div>
  );
};

export default Log;
