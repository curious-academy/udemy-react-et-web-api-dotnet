import './App.css'
import { MainRoutes } from './AppRoutes'
import { MainMenu } from './shared/layout/MainMenu'

function App() {
  return (
    <>
      <MainMenu></MainMenu>
      <MainRoutes></MainRoutes>
    </>
  )
}

export default App
