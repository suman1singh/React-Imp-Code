import React, { Component } from "react";

class App91 extends Component {
  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      login: false,
      store: null,
    };
  }
  componentDidMount() {
    this.storeCollector();
  }
  storeCollector() {
    console.log("Hello from storeCollector");
    let store = JSON.parse(localStorage.getItem("login"));
    this.setState({ store: store });
    if (store && store.login) {
      this.setState({ login: true });
    }
  }

  login() {
    // console.log("form data", this.state);
    fetch("http://localhost:3006/login", {
      method: "POST",
      body: JSON.stringify(this.state),
    }).then((resp) => {
      resp.json().then((result) => {
        console.log("result", result);
        localStorage.setItem(
          "login",
          JSON.stringify({
            login: true,
            token: result.token,
          })
        );
        this.setState({ login: true });
        this.storeCollector();
      });
    });
  }
  post() {
    let token = "Bearer " + this.state.store.token;
    console.log(token);
    fetch("http://localhost:3006/posts", {
      method: "POST",
      headers: {
        'Authorization': token,
      },
      body: this.state.post,
    }).then((resp) => {
      resp.json().then((result) => {
        console.log("result", result);
      });
    });
  }
  render() {
    return (
      <div>
        <h1>Login form with JWT Token</h1>
        {!this.state.login ? (
          <div>
            <input
              type="text"
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />{" "}
            <br />
            <br />
            <input
              type="password"
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />{" "}
            <br />
            <br />
            <button
              onClick={() => {
                this.login();
              }}
            >
              Login
            </button>
          </div>
        ) : (
          <div>
            <br />
            <textarea
              onChange={(event) => {
                this.setState({ post: event.target.value });
              }}
            ></textarea>
            <br />
            <button
              onClick={() => {
                this.post();
              }}
            >
              POST data
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App91;
