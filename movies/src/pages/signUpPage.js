import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';

const SignUpPage = props => {
  const context = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = () => {
    // Password validation criteria
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);

    if (password.length < minLength) {
      setPasswordError("Password must be at least 8 characters long");
      return false;
    }

    if (!hasUppercase) {
      setPasswordError("Password must contain at least one uppercase letter");
      return false;
    }

    if (!hasLowercase) {
      setPasswordError("Password must contain at least one lowercase letter");
      return false;
    }

    if (!hasDigit) {
      setPasswordError("Password must contain at least one digit");
      return false;
    }

    return true;
  };

  const register = () => {
    if (password.length > 0 && password === passwordAgain && validatePassword()) {
      context.register(userName, password);
      setRegistered(true);
    }
  };

  if (registered === true) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <h2>SignUp page</h2>
      <p>You must register a username and password to log in </p>
      <input
        value={userName}
        placeholder="user name"
        onChange={e => {
          setUserName(e.target.value);
        }}
      /><br />
      <input
        value={password}
        type="password"
        placeholder="password"
        onChange={e => {
          setPassword(e.target.value);
          setPasswordError(""); // Clear password error when the user types
        }}
      /><br />
      <input
        value={passwordAgain}
        type="password"
        placeholder="password again"
        onChange={e => {
          setPasswordAgain(e.target.value);
        }}
      /><br />
      <p style={{ color: "red" }}>{passwordError}</p>
      <button onClick={register}>Register</button>
    </>
  );
};

export default SignUpPage;
