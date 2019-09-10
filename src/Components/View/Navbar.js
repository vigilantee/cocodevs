import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";

class Navbar extends Component {
  state = { isSignedIn: false, login: false };
  onPress = () => {
    if (this.state.login === false) {
      this.setState({ login: true });
    } else {
      this.setState({ login: false });
    }
    console.log(global.login);
  };
  checking = () => {
    if (this.state.isSignedIn === false) {
      this.setState({ login: false });
    }
  };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
      console.log("user", user);
    });
  };
  render() {
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <ul className="left">
            <li>
              <Link to={"/"} onClick={this.checking}>
                CoCoDevs
              </Link>
            </li>
          </ul>
          <ul className="right">
            <li>
              <Link
                hidden={this.state.login}
                to={"/login"}
                onClick={this.onPress}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                hidden={!this.state.isSignedIn}
                to={"/"}
                onClick={() => {
                  firebase.auth().signOut();
                  this.setState({ login: false });
                }}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
