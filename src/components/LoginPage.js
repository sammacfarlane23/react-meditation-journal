import React from "react";
import { useDispatch } from "react-redux";
import { startGoogleLogin } from "../actions/auth";

const LoginPage = () => {
  const dispatch = useDispatch();

  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Meditation Journal</h1>
        <p>A simple app to journal your experience of meditation</p>
        <div className="login-button-container">
          <button
            className="button button--login-google"
            onClick={dispatch(startGoogleLogin)}
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
