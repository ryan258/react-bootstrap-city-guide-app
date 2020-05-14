import React, { Component } from "react";

const InfoContext = React.createContext();

// we're going to wrap the highest component with this (in the index.js)
class InfoProvider extends Component {
  render() {
    return (
      <InfoContext.Provider value="Hello World! I am the DATA!">
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };
