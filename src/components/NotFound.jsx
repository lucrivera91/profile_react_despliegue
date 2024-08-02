import React from "react";
import { Container } from "react-bootstrap";

export const NotFound = () => {
  return (
    <Container className="mt-5">
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
    </Container>
  );
};
