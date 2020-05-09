import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li>Bentonville</li>
                <li>Main St.</li>
                <li>phone: 555.555.5555</li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Lorem Ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem Ipsum</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Lorem Ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem Ipsum</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-6">
              <h4>Lorem Ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem Ipsum</a>
                </li>
                <li>
                  <a href="/">Lorem Ipsum</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} City Guide App - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;
