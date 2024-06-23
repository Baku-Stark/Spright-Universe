import { Route, Routes } from 'react-router-dom'

import { Home } from './components/pages/Home'
import { Documentation } from './components/pages/Documentation'
import { BotDocumentation } from './components/pages/BotDocumentation'
import { AboutServer } from './components/pages/AboutServer'
import { SupportServer } from './components/pages/SupportServer.tsx'
import { RulesServer } from './components/pages/RulesServer'

import { FooterContainer } from './components/layouts/container/FooterContainer'

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path={"/"} element={
            <Home/>
          }>
          </Route>
          <Route path={"/spright_universe/server/docs/"} element={
            <Documentation/>
          }></Route>
          <Route path={"/spright_universe/bot/docs/"} element={
            <BotDocumentation/>
          }></Route>
          <Route path={"/spright_universe/about_server/"} element={
            <AboutServer/>
          }></Route>
          <Route path={"/spright_universe/server_support/"} element={
            <SupportServer/>
          }></Route>
          <Route path={"/spright_universe/server_rules/"} element={
            <RulesServer/>
          }></Route>
        </Routes>
      </main>
      <FooterContainer/>
    </>
  )
}

export default App
