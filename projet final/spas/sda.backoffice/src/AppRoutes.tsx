import { Route, Routes } from "react-router-dom";
import { PageListCharacters } from "./features/characters/pages/PageListCharacters";
import { PageListGame } from "./features/games/pages/PageListGames";
import { PageHome } from "./pages/PageHome";
import { PageNoMatch } from "./pages/PageNoMatch";
import { Login } from "./features/authentication/components/Login";
import { PrivateRoute } from "./features/authentication/components/PrivateRoute";
import { PageCreateGame } from "./features/games/pages/PageCreateGame";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/" element={<PrivateRoute><PageHome></PageHome></PrivateRoute>}></Route>
      <Route
        path="/characters"
        element={<PrivateRoute><PageListCharacters></PageListCharacters></PrivateRoute>}
      ></Route>
      <Route
        path="/games"
        element={<PrivateRoute><PageListGame></PageListGame></PrivateRoute>}
      ></Route>
      <Route
        path="/games/new"
        element={<PrivateRoute><PageCreateGame></PageCreateGame></PrivateRoute>}
      ></Route>
      <Route path="*" element={<PageNoMatch />} />
    </Routes>
  );
};
