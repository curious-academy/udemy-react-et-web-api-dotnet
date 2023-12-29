import './App.css'
import { MainRoutes } from './AppRoutes'
import { UseMyContext } from './learnings/useContextLearn/UseMyContext'
import { MainMenu } from './shared/layout/MainMenu'

function App() {
  return (
    <>
      <MainMenu></MainMenu>
      <UseMyContext></UseMyContext>
      <MainRoutes></MainRoutes>
    </>
  )
}

export default App
