import React from "react";
import { Card, Container } from "react-bootstrap";
import FormCom from "./FormCom";
const message = ({ children }) => {
  return (
    <Container className="d-flex">
      <Card
        className=""
        style={{
          marginTop: "20%",
          padding: "5rem",
          width: "100%",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Card.Body>
          <Card.Title>
            <FormCom />
          </Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default message;
