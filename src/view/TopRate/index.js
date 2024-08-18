import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import axios from "axios";
import "./index.css";
import { Col, Row, Container } from "reactstrap";

const TopRate = () => {

  // Hooks
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const [expandedRow, setExpandedRow] = useState(null);


  // For fetching data from JSON file
  useEffect(() => {
    axios
      .get("data.json")
      .then((response) => {
        setData(response.data.items);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // For animation
  useEffect(() => {
      setIsLoaded(true);
  },[]);



  return (
    <div className="tr-section">
    <Container className="tr-container">
      <h1 className={isLoaded ? "page-title mv-page-title" : "page-title"}>
        Топ
      </h1>
      <Col >
        {data.map((item, index) => (
          <>
            <Row 
            className={isLoaded ? "tr-row mv-tr-row" : "tr-row"} key={index}
            >
            <div className="tr-card card" >

              <div style={{display: 'flex'}}>
              <h1 className="tr-card-title">{item.eduCenTitle}</h1>
              <img src={require(`../../assets/img/logo_${index + 1}.png`)} alt="" className="tr-card-img"/>
              </ div>
                <p className="">{item.eduCenDescr}</p>
                
                <ul className="m-0 p-0">
                  {item.eduCenOV.map((overview, indexS) => (
                    <li key={indexS}>{overview}</li>
                  ))}
                </ul>
   
              </div>
            </Row>
          </>
        ))}
      </Col>
    </Container>
    </div>
  );
};

export default TopRate;
