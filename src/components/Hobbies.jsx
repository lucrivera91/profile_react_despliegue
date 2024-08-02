import React from "react";
import { Card, Col, Container, Image, Row, Stack } from "react-bootstrap";
import deporte1 from "../assets/deporte1.jpeg";
import deporte2 from "../assets/deporte2.jpeg";
import juego1 from "../assets/juego1.jpeg";
import juego2 from "../assets/juego2.jpeg";
import musica1 from "../assets/musica1.jpeg";
import musica2 from "../assets/musica2.jpeg";
import programacion1 from "../assets/programacion1.jpeg";
import programacion2 from "../assets/programacion2.jpeg";

export const Hobbies = () => {
  const dataHobbies = [
    {
      nombre: "Videojuegos",
      descripcion:
        "Me gusta jugar juegos de PC, sobre todo juegos con buena historia y narrativa, buenos graficos y paisajes. También suelo jugar algunos juegos en linea con amigos, como Rocket League, Minecraft, Call of Duty.",
    },
    {
      nombre: "Deportes",
      descripcion:
        "Suelo jugar a fútbol y padel con mis amigos, también me gusta ver deporte en la TV, especialmente fútbol.",
    },
    {
      nombre: "Música",
      descripcion:
        "Escuchar música en YouTube mientras juego o programo, suelo escuchar de todo tipo de música, desde rock, pop, rap, trap, hip hop, electronica, latina, etc.",
    },
    {
      nombre: "Programación",
      descripcion:
        "Me gusta descubrir nuevas tecnologías y aprender sobre ellas, consultar las ultimas noticias y actualizaciones, y aprender nuevas técnicas para mejorar mi trabajo.",
    },
  ];
  return (
    <Container className="mt-3 pb-3">
      <h1 className="text-center">Hobbies</h1>
      <Row>
        {dataHobbies.map((hobby, index) => (
          <Col
            key={index}
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            className="align-self-center"
          >
            <Card
              bg="secondary"
              key={index}
              border="success"
              text="light"
              style={{}}
              className="m-2 border-3"
            >
              <Card.Body>
                <Card.Title>{hobby.nombre}</Card.Title>
                <hr />
                <Card.Text>{hobby.descripcion}</Card.Text>
                {hobby.nombre === "Videojuegos" && (
                    <Stack direction="horizontal" gap={2}>
                      <Image
                        src={juego1}
                        alt="juego1"
                        width="200px"
                        height="auto"
                        className="ms-auto me-auto"
                        thumbnail
                        fluid
                      />
                      <Image
                        src={juego2}
                        alt="juego2"
                        width="200px"
                        height="auto"
                        className="d-none d-sm-inline ms-auto me-auto"
                        thumbnail
                        fluid
                      />
                    </Stack>
                )}
                {hobby.nombre === "Deportes" && (
                    <Stack direction="horizontal" gap={2}>
                    <Image
                      src={deporte1}
                      alt="deporte1"
                      width="200px"
                      height="auto"
                      className="ms-auto me-auto"
                      thumbnail
                      fluid
                    />
                    <Image
                      src={deporte2}
                      alt="deporte2"
                      width="200px"
                      height="auto"
                      className="d-none d-sm-inline ms-auto me-auto"
                      thumbnail
                      fluid
                    />
                    </Stack>
                )}
                {hobby.nombre === "Música" && (
                    <Stack direction="horizontal" gap={2}>
                    <Image
                      src={musica1}
                      alt="musica1"
                      width="200px"
                      height="auto"
                      className="ms-auto me-auto"
                      thumbnail
                      fluid
                    />
                    <Image
                      src={musica2}
                      alt="musica2"
                      width="200px"
                      height="auto"
                      className="d-none d-sm-inline ms-auto me-auto"
                      thumbnail
                      fluid
                    />
                    </Stack>
                )}
                {hobby.nombre === "Programación" && (
                    <Stack direction="horizontal" gap={2}>
                    <Image
                      src={programacion1}
                      alt="programacion1"
                      width="200px"
                      height="auto"
                      className="ms-auto me-auto"
                      thumbnail
                      fluid
                    />
                    <Image
                      src={programacion2}
                      alt="programacion2"
                      width="200px"
                      height="auto"
                      className="d-none d-sm-inline ms-auto me-auto"
                      thumbnail
                      fluid
                    />
                    </Stack>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
