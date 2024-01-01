import { useState } from "react";
import "./App.css";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Chat from "./pages/Chat";

function App() {
  return (
    <div className="app-container">
      <Chat />
      {/* <JournalApp /> */}
      {/* <SignUp /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
