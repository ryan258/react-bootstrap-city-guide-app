import React, { Component } from "react";
import { InfoConsumer } from "../context";
import styled from "styled-components";

class Details extends Component {
  render() {
    return (
      <InfoConsumer>
        {(data) => {
          const {
            id,
            headerTitle,
            headerSubTitle,
            headerText,
            img,
            title,
            maps,
            description,
          } = data.detailInfo;

          return (
            <>
              <HeaderDetails className="container-fluid align-items-center">
                <h1 className="display-1 font-weight-bold">{headerTitle}</h1>
                <h4 className="display-5">{headerSubTitle}</h4>
                <p>{headerText}</p>
                {/* Social Icons */}
                <div className="container mt-5">
                  <div className="row justify-content-center">
                    <div className="col-2 text-center">
                      <i className="fa fa-facebook-f" />
                    </div>
                    <div className="col-2 text-center">
                      <i className="fa fa-twitter" />
                    </div>
                    <div className="col-2 text-center">
                      <i className="fa fa-google-plus" />
                    </div>
                    <div className="col-2 text-center">
                      <i className="fa fa-reddit" />
                    </div>
                    <div className="col-2 text-center">
                      <i className="fa fa-whatsapp" />
                    </div>
                    <div className="col-2 text-center">
                      <i className="fa fa-phone-square" />
                    </div>
                  </div>
                </div>
              </HeaderDetails>
              {/* Tabbed Display */}
              <div className="container">
                {/* Tabs */}
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a
                      href="#about"
                      className="nav-link active"
                      role="tab"
                      data-toggle="tab"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#reviews"
                      className="nav-link"
                      role="tab"
                      data-toggle="tab"
                    >
                      Reviews
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="#map"
                      className="nav-link"
                      role="tab"
                      data-toggle="tab"
                    >
                      Map
                    </a>
                  </li>
                </ul>
                {/* Tab Pane */}
                <div className="tab-content mb-5">
                  {/* About */}
                  <div
                    id="about"
                    className="tab-pane in active text-center mt-5"
                    role="tabpanel"
                  >
                    <h2 className="mb-3">{title}</h2>
                    <p>{description}</p>
                    <img
                      src={img}
                      alt={title}
                      className="img-thumbnail img-fluid"
                    />
                  </div>
                  {/* Reviews */}
                  <div id="reviews" className="tab-pane" role="tabpanel">
                    Reviews Content
                  </div>
                  {/* Map */}
                  <div id="map" className="tab-pane" role="tabpanel">
                    <iframe
                      src={maps}
                      title={title}
                      style={{
                        border: "0",
                        height: "28.125rem",
                        width: "100%",
                        frameBorder: "0",
                      }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </>
          );
        }}
      </InfoConsumer>
    );
  }
}

export default Details;

const HeaderDetails = styled.header`
  background: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));
  height: 100vh;
  text-transform: uppercase;
  color: var(--mainWhite);
  text-align: center;

  h1 {
    padding-top: 10%;
    color: var(--mainDark);
  }

  h4 {
    color: var(--mainDark);
  }

  p {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10%;
    color: var(--mainDark);
  }

  i {
    font-size: 1.875rem;
    color: var(--mainDark);
  }

  i:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }

  .nav-item {
    height: 18.75rem;
  }

  @media (max-width: 760px) {
    h1,
    h4 {
      color: var(--mainWhite);
    }
  }
`;
