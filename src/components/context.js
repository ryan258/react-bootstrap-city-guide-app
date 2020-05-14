import React, { Component } from "react";
// 1.) import data from file
import { placeInfo, reviews, detailInfo, news } from "../data";

const InfoContext = React.createContext();

// we're going to wrap the highest component with this (in the index.js)
class InfoProvider extends Component {
  // 2.) pull data from file into state
  state = {
    info: placeInfo,
    reviews: reviews,
    detailInfo: detailInfo,
    news: news,
  };

  render() {
    return (
      // 3.) pass data through the Provider
      <InfoContext.Provider
        value={{
          info: this.state.info,
          reviews: this.state.reviews,
          maps: this.state.maps,
          headerTitle: this.state.headerTitle,
          headerSubTitle: this.state.headerSubTitle,
          headerText: this.state.headerText,
          detailInfo: this.detailInfo,
          news: this.state.news,
          name: this.state.name,
          avatar: this.state.avatar,
          comment: this.state.comment,
        }}
      >
        {this.props.children}
      </InfoContext.Provider>
    );
  }
}

const InfoConsumer = InfoContext.Consumer;

export { InfoProvider, InfoConsumer };
