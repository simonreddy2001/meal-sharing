/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import PropTypes from "prop-types";
import "./testComponentStyle.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function TestComponent() {
  return (
    <>
      <Navbar />
      <section className="test-component">
        <h1>Just to create new component</h1>
        <p>in a test component</p>
      </section>
      <Footer />
    </>
  );
}
