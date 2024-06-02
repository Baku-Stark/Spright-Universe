import { Route, Routes } from 'react-router-dom'

import { Home } from './components/pages/Home'
import { Documentation } from './components/pages/Documentation'
import { BotDocumentation } from './components/pages/BotDocumentation'

function App() {
  return (
    <main>
      <Routes>
        <Route path={"/"} element={
          <Home/>
        }>
        </Route>
        <Route path={"/docs"} element={
          <Documentation/>
        }></Route>
        <Route path={"/bot/docs"} element={
          <BotDocumentation/>
        }></Route>
      </Routes>
    </main>
  )
}

export default App