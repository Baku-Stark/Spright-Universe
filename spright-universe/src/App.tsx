import { Route, Routes } from 'react-router-dom'

import { Home } from './components/pages/Home'
import { Documentation } from './components/pages/Documentation'
import { BotDocumentation } from './components/pages/BotDocumentation'
import { AboutServer } from './components/pages/AboutServer'
import { SupportServer } from './components/pages/SupportServer.tsx'
import { InfoWorld } from './components/pages/InfoWorld'
import { RulesServer } from './components/pages/RulesServer'
import { CharsServer } from './components/pages/CharsServer'

import { FooterContainer } from './components/layouts/container/FooterContainer'
import { Companys } from './components/pages/Companys.tsx'

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path={"/"} element={
            <Home/>
          }>
          </Route>
          <Route path={"/spright_universe/bot/docs/"} element={
            <BotDocumentation/>
          }></Route>
          <Route path={"/spright_universe/about_server/"} element={
            <AboutServer/>
          }></Route>
          <Route path={"/spright_universe/server_support/"} element={
            <SupportServer/>
          }></Route>
          {/* DOCUMENTAÇÃO [SERVIDOR] */}
          <Route path={"/spright_universe/server/docs/"} element={
            <Documentation/>
          }></Route>
          <Route path={"/spright_universe/server/docs/server_companys"} element={
            <Companys/>
          }></Route>
          <Route path={"/spright_universe/server/docs/server_chars/"} element={
            <CharsServer/>
          }></Route>
          <Route path={"spright_universe/server/docs/server_info_world/"} element={
            <InfoWorld/>
          }></Route>
          <Route path={"/spright_universe/server/docs/server_rules/"} element={
            <RulesServer/>
          }></Route>
        </Routes>
      </main>
      <FooterContainer/>
    </>
  )
}

export default App
