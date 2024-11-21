import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="sign-container">
      {/* Left Side: Sign In Section */}
      <div className="sign-left">
        <h1>Welcome Back!</h1>
        <p>To keep connected with us please login with your personal info.</p>
        <button className="sign-button">SIGN IN</button>
      </div>

      {/* Right Side: Sign Up Section */}
      <div className="sign-right">
        <h2>Sign Up</h2>
        <form className="sign-form">
          <input type="text" placeholder="User" className="sign-input" />
          <input type="email" placeholder="Email" className="sign-input" />
          <input type="password" placeholder="Password" className="sign-input" />
          <button type="submit" className="sign-button">SIGN UP</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
