import React from 'react';
import { connect } from 'react-redux';
import { startGoogleLogin } from '../actions/auth';

export const LoginPage = ({ startGoogleLogin, startFacebookLogin }) => (
  <div className='box-layout'>
    <div className='box-layout__box'>
      <h1 className='box-layout__title'>Meditation Journal</h1>
      <p>A simple app to journal your experience of meditation</p>
      <div className='login-button-container'>
        <button
          className='button button--login-google'
          onClick={startGoogleLogin}
        >
          Login with Google
        </button>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startGoogleLogin: () => dispatch(startGoogleLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
