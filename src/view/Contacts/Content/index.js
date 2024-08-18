import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Label, Input, FormGroup, Button } from "reactstrap";
import emailjs from "emailjs-com";

const ContactContent = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    source: "English Top Rate", // Replace 'WebsiteName' with the actual name of your website
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add source information to the message
    const fullMessage = `${formData.message}\n\nSource: ${formData.source}`;
    const modifiedForm = {
      ...formData,
      message: fullMessage,
    };

    emailjs
      .send(
        "",
        "",
        modifiedForm,
        ""
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
      source: "English Top Rate", // Reset the source field as well
    });
  };

  return (
    <div
      className={
        isLoaded ? "contact-content card mv-contact" : "contact-content card"
      }
    >
      <p className="contact-descr">
        <div>
          Моя почта -{" "}
          <Link to="mailto:Gaismail777@gmail.com">
            {" "}
            <span className="c-o">Gaismail777@gmail.com</span>{" "}
          </Link>
        </div>
        <div>
          Мой -{" "}
          <Link to="https://t.me/isa_projects">
            <span className="c-b">Telegram канал</span>{" "}
          </Link>
        </div>
      </p>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Имя</Label>
          <Input
            id="name"
            name="name"
            placeholder="Ваше имя"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email" className="email-label">
          Email  {"-> "}<span>Example@gmail.com</span>
           
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="Ваш email"
            type="text"
            required
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="message">
            Текст <br />
          </Label>
          <Input
            id="message"
            name="message"
            type="textarea"
            placeholder="Напишите мне для предложений"
            value={formData.message}
            required
            minLength={10}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
        </FormGroup>
        {/* Hidden input field for the source */}
        <Input type="hidden" name="source" value={formData.source} />
        <Button>Отправить</Button>
      </Form>
      </div>
)
}


export default ContactContent;
