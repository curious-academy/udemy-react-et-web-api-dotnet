import { Col, Row } from "react-bootstrap";
import { TableGame } from "../TableGame";
import { Games } from "../../models";
import { getListGame } from "../../services";

/**
 * Composant représentant un tableau des games à gérer
 * @returns 
 */
export const ListGame = () => {
  const list: Games = getListGame();

  const monComposant = (
    <>
      <Row>
        <Col md={2}>
          <TableGame items={list}></TableGame>
        </Col>
      </Row>
    </>
  );

  console.info(monComposant);

  return monComposant;
};
