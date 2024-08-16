import './App.css';

import Navbar from './componentes/navbar/Navbar';
import Footer from './componentes/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pagina/home/Home';
import ListaCategorias from './componentes/listarCategorias/ListarCategorias';
import DeletarCategorias from './componentes/categoria/deletarCategoria/DeletarCategorias';
import FormularioCategoria from './componentes/categoria/formularioCategoria/FormularioCategoria';


function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/deletarCategora/:id" element={<DeletarCategorias />} />
              <Route path="/postagens" element={<ListaCategorias />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}
export default App;