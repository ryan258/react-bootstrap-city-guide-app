import React, { Component } from "react";
import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        <div className="container">
          <div className="well well-sm">
            <h3>
              <strong>Our Location</strong>
            </h3>
          </div>

          <div className="row">
            <div className="col-md-7">
              <iframe
                title="location-map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12856.266629213007!2d-94.2031462!3d36.3349343!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c91044b21690c5%3A0x9fdf135a6d34e14b!2sJohnny%20Brusco&#39;s%20New%20York%20Style%20Pizza%20-%20Delivery%20Available%20-%20Curbside%20Pickup%20Available!5e0!3m2!1sen!2sus!4v1589483566243!5m2!1sen!2sus"
                style={{
                  border: "0",
                  width: "100%",
                  height: "315px",
                  frameborder: "0",
                }}
              ></iframe>
            </div>
            <div className="col-md-5">
              <h4>
                <strong>Contact Us</strong>
              </h4>
              <form action="">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <textarea
                  className="form-control"
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                  placeholder="Message"
                ></textarea>
                <Link className="btn btn-outline-primary text-uppercase mt-1">
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
                  {/* <i className="fab fa-telegram-plane" aria-hidden="true"></i> */}
                  &nbsp;Send
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
