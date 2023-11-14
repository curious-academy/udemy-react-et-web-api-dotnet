import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export const TitleGame = () => {
    // let title = 'Liste des parties';
    const [title, setTitle] = useState('Liste des parties');

    const onClickToChangeTitle = () => {
        setTitle('soyons fou !');
        console.info(title);
    }

  const component = (
    <>
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
            <button onClick={onClickToChangeTitle}>Change title</button>
        </Col>
      </Row>
    </>
  );

//  console.info(component);

  return component;
};
