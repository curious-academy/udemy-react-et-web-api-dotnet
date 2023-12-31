import { Route, Routes } from "react-router-dom";
import { PageListCharacters } from "./features/characters/pages/PageListCharacters";
import { PageListGame } from "./features/games/pages/PageListGames";
import { PageHome } from "./pages/PageHome";
import { PageNoMatch } from "./pages/PageNoMatch";
import { Login } from "./features/authentication/components/Login";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
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
