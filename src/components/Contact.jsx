import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export const Contact = () => {
  const initialForm = {
    nombre: "",
    email: "",
    mensaje: "",
    telefono: "",
  };

  const [formData, setFormData] = useState(initialForm);
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      console.log("Mensaje enviado", formData);
      alert("Mensaje enviado con éxito");
      setFormData(initialForm);
    }
    setValidated(true);
  };

  return (
    <Container className="contact">
      <h1 className="text-center">Contacto</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3 mt-3">
          <Form.Group as={Col} xs="12" md="6" lg="6" controlId="validationName">
            <Form.Label>Nombre*</Form.Label>
            <Form.Control
              required
              type="text"
              name="nombre"
              placeholder="Escribe tu nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Por favor, proporcione un nombre válido.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            xs="12"
            md="6"
            lg="6"
            controlId="validationEmail"
          >
            <Form.Label>Email*</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              placeholder="Escribe tu email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
            <Form.Control.Feedback type="invalid">
              Por favor, proporcione un email válido.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            xs="12"
            md="6"
            lg="6"
            controlId="validationMessage"
          >
            <Form.Label>Mensaje*</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="mensaje"
              placeholder="Escribe un mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor, proporcione un mensaje válido.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            xs="12"
            md="6"
            lg="6"
            controlId="validationPhone"
          >
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="text"
              name="telefono"
              placeholder="Escribe tu teléfono"
              value={formData.telefono}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        <Button type="submit">Enviar mensaje</Button>
      </Form>
    </Container>
  );
};
