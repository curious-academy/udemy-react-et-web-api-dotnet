import './App.css'
import { MainRoutes } from './AppRoutes'
import { AuthenticationContextProvider } from './features/authentication/components/AuthenticationProvider'
import List from './learnings/memoLearn/MemoLearn'
import { LayoutComponent } from './learnings/useChildrenLearn/LayoutComponent'
import SquareList from './learnings/useMemoLearn/useMemoLearn'
import { MainMenu } from './shared/layout/MainMenu'

function App() {
  // const getStorageStr = localStorage.getItem('player');
  // console.info(getStorageStr);

  // if (getStorageStr) {
  //   const player = JSON.parse(getStorageStr) as  {surname: string};
  //   console.info(player);
  // } else {
  //   localStorage.setItem('player', JSON.stringify({surname: 'legolas'}));
  // }
  

  return (
    <>
      <SquareList></SquareList>

      <AuthenticationContextProvider>
        <MainMenu></MainMenu>
        <LayoutComponent>
          <MainRoutes></MainRoutes>
        </LayoutComponent>
      </AuthenticationContextProvider>
    </>
  )
}

export default App
