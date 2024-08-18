import { React, useState, useEffect } from "react";
import "./index.css";

// Content for Contact section

import ContactContent from "./Content";

// Reactstrap

import { Container } from "reactstrap";

// React-bootstrap components

import Header from "../../components/Header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Squares

const squares = ["square-one","square-two","square-three","square-four",];



const Contacts = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="contact-section">
    
    {squares.map((item, index)=> (
      <div className={isLoaded ? 'square ' + item  + " an-square" :  'square ' + item} key={index}>
      </div>
    ))}
    
    <Container className="contact-container">
    <ContactContent/>
    </Container>
    </div>
  );
};

export default Contacts;
