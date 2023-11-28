import { Route, Routes } from "react-router-dom";
import { PageListCharacters } from "./features/characters/pages/PageListCharacters";
import { PageNoMatch } from "./pages/PageNoMatch";
import { PageHome } from "./pages/PageHome";
import { PageListGame } from "./features/games/pages/PageListGames";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageHome></PageHome>}></Route>
      <Route
        path="/characters"
        element={<PageListCharacters></PageListCharacters>}
      ></Route>
      <Route
        path="/games"
        element={<PageListGame></PageListGame>}
      ></Route>
      <Route path="*" element={<PageNoMatch />} />
    </Routes>
  );
};
