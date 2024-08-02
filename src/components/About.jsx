import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import intro1 from "../assets/intro1.jpeg";
import intro2 from "../assets/intro2.jpeg";

export const About = () => {
  const dataUser = {
    nombre: "Luciano",
    edad: 33,
    ocupacion: "Programador Web",
    bio: "Soy tecnico superior en programacion y desarrollador web con tecnologías como Javascript, HTML5, CSS3, Bootstrap, React, Node.js, etc.",
  };
  return (
    <Container className="mt-3 about">
      <h1 className="text-center">Información Personal</h1>
      <Card
        bg="dark"
        border="primary"
        key="dark"
        text="light"
        className="mb-2 mt-2 p-2 align-self-center"
      >
        <Card.Header>
          {dataUser.nombre}, {dataUser.edad} años
        </Card.Header>
        <hr />
        <Card.Body>
          <Card.Title>{dataUser.ocupacion}</Card.Title>
          <Row>
            <Col xs={12} sm={12} md={4} lg={4}>
          <Card.Text>{dataUser.bio}</Card.Text>
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
          <Image src={intro1} alt="intro1" width="400px" height="auto" className="me-2 mt-2" thumbnail fluid />
          </Col>
          <Col xs={12} sm={6} md={4} lg={4}>
          <Image src={intro2} alt="intro2" width="400px" height="auto" className="d-none d-sm-inline" thumbnail fluid />
          </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};
