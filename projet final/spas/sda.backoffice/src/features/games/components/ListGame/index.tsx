import { Col, Row } from "react-bootstrap";
import { TableGame } from "../TableGame";
import { Games } from "../../models";
import { getListGame } from "../../services";
import { TitleGame } from "../TitleGame";
import { useState } from "react";

/**
 * Composant représentant un tableau des games à gérer
 * @returns 
 */
export const ListGame = () => {
  const [list, setList] = useState<Games>(getListGame);
  const affichageTitre = true;

  const addGameCallback = () => {
    // list.push({
    //   id: 18, persoChoisi: { surname: 'test'}, success: true
    // });

    const nouvelElement = {
      id: list.length + 1, persoChoisi: { surname: `test-${list.length + 1}`}, success: true
    }

    setList(list => [nouvelElement, ...list]);
    setList(list => [nouvelElement, ...list]);
    setList(list => [nouvelElement, ...list]);

   
  };

  const changeStateListGame = (id: number, newState: boolean) => {
    const newVersionList = [... list];
    const element = newVersionList.find(item => item.id === id);

    if (element) {
      element.success = newState;
    }
    setList(newVersionList);
  };

  const addGame = <Row><Col><button onClick={addGameCallback}>Nouvelle partie</button></Col></Row>;

  const monComposant = (
    <>
      { affichageTitre && <TitleGame></TitleGame> }
      { addGame }
      <Row>
        <Col md={2}>
          <TableGame items={list} changeState={changeStateListGame}></TableGame>
        </Col>
      </Row>
    </>
  );

  console.info(monComposant);

  return monComposant;
};
