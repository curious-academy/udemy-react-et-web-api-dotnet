import { Table } from "react-bootstrap";
import { Games } from "../../models";
import { RowGame } from "../RowGame";

export type TableGameProp = {
  items: Games,
  changeState ?: (id: number, newState: boolean) => void
};

export const TableGame = (props: TableGameProp) => {
  const changeStateTableGame = (id: number, newState: boolean) => {
    if (typeof props.changeState !== 'undefined') {
      props.changeState(id, newState);
    }
  };
  const listRows = props.items.map(game => <RowGame key={game.id} 
                                                    id={game.id} 
                                                    characterName={game.persoChoisi.surname} success={game.success.toString()} 
                                                    changeState={changeStateTableGame}
                                           ></RowGame>)

  const composant = (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Perso</th>
            <th>Gagnée ?</th>
            <th>Action(s)</th>
          </tr>
        </thead>
        <tbody>
          { listRows }
        </tbody>
      </Table>
    </>
  );

  console.info("Table ?", composant);
  return composant;
};
