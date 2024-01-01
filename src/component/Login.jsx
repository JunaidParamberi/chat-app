import React, { useState } from "react";
import emailIcon from "../assets/mail.svg";
import passwordIcon from "../assets/passworrd.svg";
import show from "../assets/show.svg";
import google from "../assets/Google.svg";
import Chat from "../pages/Chat";

import { initializeApp } from "firebase/app";
import {
  signInWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBXLICFRZ08S-f111IclKe34niBW8q9cvo",
  authDomain: "mood-journal-f96c2.firebaseapp.com",
  projectId: "mood-journal-f96c2",
  storageBucket: "mood-journal-f96c2.appspot.com",
  messagingSenderId: "533137822650",
  appId: "1:533137822650:web:b6e0dee9c3d25994184383",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function Login({ loginStateChange }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userEnterd, setUserEntered] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);

  function loginSubmit(e) {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setUserEntered(true);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  const handleGoogleLogin = async () => {
    setUserEntered(false);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // You can now use the 'user' object for any further actions, e.g., checking if the user is already registered in your system.

      console.log("Google login successful:", user);
      setUserEntered(true);
    } catch (error) {
      console.error("Error during Google login:", error.message);
    }
  };

  function handleShowPassword() {
    setShowPassword((prevState) => !prevState);
  }

  if (userEnterd) {
    return <Chat />;
  }
  return (
    <div className="login-page">
      <div className="sidebar">
        <h1>Mood</h1>
        <h1>Journal</h1>
        {/* <img src={emoji1} />
        <img src={emoji2} /> */}
      </div>
      <div className="login-container">
        <h3>Welcome..</h3>

        <form onSubmit={loginSubmit}>
          <div className="input-container">
            <img className="icon" src={emailIcon} alt="" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-container">
            <img className="icon" src={passwordIcon} alt="" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              className=" icon show"
              src={show}
              alt=""
              onClick={handleShowPassword}
            />
          </div>
          <button>Login</button>
          <p>Or</p>
        </form>
        <div className="google-login" onClick={handleGoogleLogin}>
          <img src={google} alt="" />
          <h5>Login with Google</h5>
        </div>
        <div className="signup-snippet">
          <p>Have no account yet?</p>
          <button onClick={loginStateChange}>Registration</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
