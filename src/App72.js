import React, { Component } from "react";
import { commonContext } from "./cmp72/commonContext";
import Footer from "./cmp72/Footer";
import Header from "./cmp72/Header";
import Main from "./cmp72/Main";
import UpdateButton from "./cmp72/UpdateButton";
class App72 extends Component {
    constructor(){
        super()
        this.updateColor=(color)=>{
            this.setState({
                color:color
            })
        }
        this.state={
            color:"green",
            updateColor:this.updateColor
        }
       
    }
  render() {
    return (
      <div>
        <commonContext.Provider value={this.state}>
        <Header />
          <h1>Complete and easy example for Context API</h1>
          <Main />
          <UpdateButton />
          <Footer />
        </commonContext.Provider>
      </div>
    );
  }
}

export default App72;
