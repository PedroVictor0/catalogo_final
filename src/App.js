import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layout/layout';
import Catalogo from './Catalogo/Catalogo';
import Sobre from './sobre/sobre';
import NotFound from './NotFound/notFund';
import Plataforma from './plataforma/plataforma';
import Login from './login/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Catalogo />} />
          <Route path='sobre' element={<Sobre/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='plataforma' element={<Plataforma/>}/>
          <Route path='login' element={<Login/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
