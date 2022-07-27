import React, { useEffect, useState } from "react";
import Axios from '../services/ConexionAxios';



function Modelos() {
  const [producto, setProducto] = useState([]);

  const Consultar = async () => {
    const consulta = await Axios.get("/producto/consultar");
    setProducto(consulta.data);
    console.log(consulta.data);
  };

  useEffect(() => {
    Consultar();
  }, []);
  return (
    <>
    <div class="container">
      {producto.map((producto, index) => {
        return (
              <div class="col lg-4 m-1">
                <center>
                <div class="card">
                    <div class="">
                    <img src={producto.idImagen} class="img-fluid rounded-4" height="120px"/>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">{producto.nombre}</h5>
                    <p class="card-text">
                      {producto.descripcion}
                    </p>
                    <a href="#" class="btn btn-primary">
                      {producto.precio}
                    </a>
                  </div>
                </div>
                    </center>
                    
              </div>
              );
              })}
            </div>
            </>
           );
          }

export default Modelos;