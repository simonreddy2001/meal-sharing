/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import PropTypes from "prop-types";
import "./testComponentStyle.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="test-component">
        <h1>Risks aside, food sharing remains a fantastic option to enjoy delicious cuisine while also reducing global food waste? Here is our food-sharing apps motive.</h1>
        <img src='https://familyapp.com/static/10ccf27cb4928a321b4466e1038d9fcb/9f4bf/the-3-best-food-sharing-apps-2.webp' alt="food Sharing pic" />
        <h3>Whether it’s fruit, vegetables, or dairy, there’s a lot of food waste in the United States each day.
          Luckily, many new food sharing apps are working to provide solutions!</h3>
        <p>The sharing culture has become an important part of how people provide and access services in recent years.
          It helps to bridge the gap between those who have an abundance and those who have significant needs.
          It's also a wonderful way to forge meaningful connections as we can share new experiences through food and family.

          Whether companies are looking for ways to reduce food waste or families are looking for a homemade entrée, food sharing apps can help bring communities together.
          Do you all have any favorite food sharing apps? Let us know on social #getfamilyapp!</p>
      </section>
      <Footer />
    </>
  );
}
