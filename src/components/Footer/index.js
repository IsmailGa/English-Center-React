import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer_container">
        <Link to="https://github.com/IsmailGa">Github</Link>
      </Container>
    </footer>
  );
};

export default Footer;
