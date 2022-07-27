import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'


function Formulario() {

  return (
    <div>
      <div class="row">
        <div class="col s12 m4">
          <div class="card purple lighten-2">
            <div class="card-content black-text">
              <span class="card-title">Iniciar sesion </span>
              <div class="row">
                <form class="col s12">
                  <div class="row">

                    <div class="input-field col s12">
                      <input id="first_name" type="text" class="validate"/>
                      <label for="first_name">Introduce correo</label>
                    </div>
                    

                    <div class="input-field col s12">
                      <input id="last_email" type="text" class="validate" />
                      <label for="last_email">Password</label>
                    </div>

                  </div>

                  <div class="row">
                    <div class="input-field col s12">
                      <input id="password" type="password" class="validar"/>
                      <label for="password">confirmar Password</label>
                    </div>
                  </div>
                </form>
              </div>
              <div class="card-action">
              <Link to ="/" class="waves-effect waves-light btn">
              <i class="material-icons left"></i>Enviar</Link>
            </div>

            </div>
            <div class="card-action">
              <Link to ="/Registro" class="waves-effect waves-light btn">
                <i class="material-icons left"></i>crear cuenta</Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulario;