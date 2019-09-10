import React from "react";
import "./App.css";
import Navbar from "./Components/View/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyBL2aA2VQdLOHysEtYwA7Vms3V5Jocxma8",
  authDomain: "cocodevs-6c1f1.firebaseapp.com"
});

function App() {
  return (
    <React.Fragment>
      <Router>
        <Route path={"/"} component={Navbar}></Route>
        <Route path={"/login"} component={Login}></Route>
      </Router>
    </React.Fragment>
  );
}

export default App;
