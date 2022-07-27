import React, { useEffect } from "react";

import { Link } from 'react-router-dom';

import M from "materialize-css";

function Menu() {

  const colapsado = () => {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);


    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems);
  }


  useEffect(() => {
    colapsado();
  }, [])

  return (
    <div className="fondo">
      <nav class="nav-extended yellow lighten-1">
        <div className="nav-wrapper">
          <a className="black-text" href="/">
            FOOTWEAR
            <img width="30px" src='https://drive.google.com/uc?export=download&id=1HufvTscLQM0x2s1PB21Ag3yXjXm1awQm'></img>
          </a>

          <ul class="right hide-on-med-and-down">
            <li>
              <Link className="red-text" to="/">Home</Link>
            </li>
            <li>
              <Link className="red-text" to="/Formulario">Iniciarsesion</Link>
            </li>
            <li>
              <Link className="red-text" to="/Registro">Registro</Link>
            </li>
            <li>
              <Link className="red-text" to="/Modelos">Modelos</Link>
            </li>     
            
            <a class='yellow dropdown-trigger btn' href='#' data-target='dropdown1'>Categoria</a>
            <ul id='dropdown1' class='dropdown-content'>
            <li><a href="/Botas" to='/Botas'>Botas</a></li>
            <li><a href="/Sandalias">Sandalia</a></li>
            <li><a href="/Tacones">Tacones</a></li>
            <li><a href="/Tenis">Tenis</a></li>
            </ul>


            <li>
            <Link className="red-text" to="/RegistrarPro">RegistrarProducto</Link>
            </li>

            <li>
              <Link className="red-text" to="/Usuario">Usuario</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Menu;