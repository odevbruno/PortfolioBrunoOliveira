import Clientes from "./Components/Clientes/Clientes";
import Intro from "./Components/Intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import Topbar from "./Components/Topbar/TopBar"; 
import Contact from "./Components/Contact/Contact";
import './app.scss';
import { useState } from "react";
import Menu from "./Components/Menu/Menu"; 
import Servicos from "./Components/Servicos/Servicos";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar abreMenu={menuOpen} handlerAbreMenu={setMenuOpen} />
      <Menu abreMenu={menuOpen} handlerAbreMenu={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />  
        <Servicos/>
        <Clientes />
        <Contact />

      </div>
    </div>
  );
}

export default App;
