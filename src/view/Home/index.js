import "./index.css";
import { React, useState, useEffect } from "react";
import Header from "../../components/Header";
import { Container, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate(); 

  const handleNavigation = () => {
    navigate('/toprates')
  }

  const [isLoaded, setIsLoadead] = useState(false);
  useEffect(() => {
    setIsLoadead(true);
  }, []);

  return (
    <div className="home-section">
      <Container>
        <h1 className={isLoaded ? "page-title mv-page-title" : "page-title"}>
          Добро пожаловать!
        </h1>
        <span className="line">
        </span>
        <p className={isLoaded ? "home-descr mv-home-descr": "home-descr"}>
          Изучение английского языка открывает двери к новым возможностям в
          образовании, карьере и путешествиях. Но как выбрать лучший учебный
          центр среди множества предложений? Здесь, чтобы помочь вам сделать
          правильный выбор.
        </p>
        <Button
          onClick={handleNavigation}
          size="lg"
          className={isLoaded ? "home-btn mv-home-btn" : "home-btn"}
        >
          Перейти к Топу{" "}
        </Button>
      </Container>
    </div>
  );
};

export default Home;
