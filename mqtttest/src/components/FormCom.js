import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col } from "react-bootstrap";
const FormCom = () => {
  const [id, setID] = useState("");
  const [message, setMessage] = useState("");

  const isInValid = id === "";

  const onSubmitHandler = async (e) => {
    const data = {
      device_id: id,
      msg: message,
      val: "ON",
    };
    e.preventDefault();

    await axios.post("http://localhost:8080/api/message", data).then((res) => {
      console.log(res.data);
      setID("");
      setMessage("");
    });
    console.log("on fired");
  };
  const offSubmitHandler = async (e) => {
    const data = {
      device_id: id,
      msg: message,
      val: "OFF",
    };
    e.preventDefault();

    await axios.post("http://localhost:8080/api/message", data).then((res) => {
      console.log(res.data);
      setID("");
      setMessage("");
    });
    console.log("off fired");
  };

  return (
    <>
      <Form method="POST">
        <Form.Group className="mb-3" controlId="formBasicid">
          <Form.Label>Device ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter id"
            value={id}
            onChange={({ target }) => setID(target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Message"
            value={message}
            onChange={({ target }) => setMessage(target.value)}
          />
        </Form.Group>
        <Row className="d-flex">
          <Col className="col-mb-2">
            <Button
              variant="primary"
              type="submit"
              disabled={isInValid}
              style={{ padding: "1rem 3rem" }}
              onClick={onSubmitHandler}
            >
              On
            </Button>
          </Col>
          <Col className="col-mb-2">
            <Button
              variant="danger"
              type="submit"
              disabled={isInValid}
              style={{ padding: "1rem 3rem" }}
              onClick={offSubmitHandler}
            >
              Off
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default FormCom;
