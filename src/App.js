import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        doloremque, error pariatur eveniet neque minus esse non iusto? Vitae
        beatae perspiciatis omnis voluptatum veritatis ipsam numquam officia
        qui. Magnam fugit ipsum ab consequuntur eveniet voluptate aliquam, dolor
        suscipit! Voluptatibus distinctio, unde molestiae tempora animi nemo?
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
