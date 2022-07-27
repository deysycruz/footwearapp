import React from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from '../Paginas/Estilo/Home';
import Formulario from '../Paginas/Formulario';
import Layout from '../Componentes/Layouts/Layout';
import Categoria from '../Paginas/Categoria';
import Usuario from "../Paginas/Usuario";
import Botas from '../Paginas/Botas';
import Tenis from '../Paginas/Tenis';
import Sandalias from '../Paginas/Sandalias';
import Tacones from '../Paginas/Tacones';
import Registro from '../Paginas/Registro';
import RegistrarProducto from '../Paginas/RegistrarProducto';
import Modelos from '../Paginas/Modelos';
import RegistrarBotas from '../Paginas/RegistrarBotas';
import RegistrarSandalia from '../Paginas/RegistrarSandalia';
import RegistrarTacones from '../Paginas/RegistrarTacones';
import RegistrarTenis from '../Paginas/RegistrarTenis';


function Rutas() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path="/Formulario" element={<Formulario />} />
            <Route exact path='/Categoria' element={<Categoria />} />
            <Route exact path="/Usuario" element={<Usuario />} />
            <Route exact path='/Botas' element={<Botas />} />
            <Route exact path='/Tenis' element={<Tenis />} />
            <Route exact path='/Sandalias' element={<Sandalias />} />
            <Route exact path='/Tacones' element={<Tacones />} />
            <Route exact path='/Registro' element={<Registro />} />
            <Route exact path='/RegistrarPro' element={<RegistrarProducto />} />
            <Route exact path='/Modelos' element={<Modelos />} />
            <Route exact path='/RegistrarBotas' element={<RegistrarBotas />} />
            <Route exact path='/RegitrarSandalia' element={<RegistrarSandalia />} />
            <Route exact path='/RegistrarTacones' element={<RegistrarTacones />} />
            <Route exact path='/Registrartenis' element={<RegistrarTenis />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  )
}

export default Rutas;