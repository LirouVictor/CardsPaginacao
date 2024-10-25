import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './Paginas/Home/Home'
import './App.css'
import CadastroUsuario from "./Paginas/CadastroUsuario/CadastroUsuario";
import AreaLogada from './Paginas/AreaLogada/Home/AreaLogada'

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/CadastroUsuarios" element={<CadastroUsuario/>}/>
        <Route path="/Home/AreaLogada" element={<AreaLogada/>}/>
      </Routes>
    </Router>
  );
}

export default App
