import React, { useState} from "react";

import Axios from "../services/ConexionAxios";
import {useNavigate} from  'react-router-dom'



function Registro() {

  const variables = {
    _id:"",
    contraseña: "",
    nombre: "",
    apellidos: "",
    telefono: "",
    email: "",
  };

  const [valores, setValores] = useState(variables);
  const navigate = useNavigate();

  const cambioEstado = (e) => {
    const { name, value } = e.target;
    setValores({ ...valores, [name]: value });
  };


  //Crear método para guardar información
const Guardar=async()=>{
  Axios.post('/persona/guardar',{
    contraseña:valores.contraseña,
    nombre:valores.nombre,
    apellidos:valores.apellidos,
  telefono:valores.telefono,
  email:valores.email
  }).then(()=>{
    console.log('se guadaron los cambios')
   
  })
  setValores("");
  navigate("/");
  }


  const Enviar = (e) => {
    e.preventDefault();

    if(valores._id===""){
      Guardar();
    }else{
      
    }
    
  };


  return (
<div className="container-fluid p-4">
      <div class="card">
        <div class="card-header">Creacion de perfil</div>
        <div class="card-body">
          <p class="card-text">
            <form onSubmit={Enviar}>
             
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="nombre"
                  value={valores.nombre}
                  onChange={cambioEstado}
                  placeholder="nombre de la persona"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Apellidos
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="apellidos"
                  value={valores.apellidos}
                  onChange={cambioEstado}
                  placeholder="Ingresa los apellidos"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Teléfono
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="telefono"
                  value={valores.telefono}
                  onChange={cambioEstado}
                  placeholder="Ingresa el numero telefonico"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={valores.email}
                  onChange={cambioEstado}
                  placeholder="name@example.com"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Contraseña
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="contraseña"
                  value={valores.contraseña}
                  onChange={cambioEstado}
                  placeholder=""
                />
              </div>


              <button type="submit" className="btn btn-primary">
                {valores._id === "" ? "Enviar":"Actualizar"}
              </button>
            </form>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Registro