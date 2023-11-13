import { Table } from "react-bootstrap";
import { Games } from "../../models";
import { RowGame } from "../RowGame";

export type TableGameProp = {
  items: Games;
};

export const TableGame = (props: TableGameProp) => {
  console.info(props);
  const listRows = props.items.map(game => <RowGame key={game.id} id={game.id} characterName={game.persoChoisi.surname} success={game.success.toString()} ></RowGame>)

  const composant = (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Perso</th>
            <th>Gagnée ?</th>
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
