import React, { useEffect, useState } from "react";
import Axios from '../services/ConexionAxios';



function Sandalias() {
  const [producto, setProducto] = useState([]);

  const Consultar = async () => {
    const consulta = await Axios.get("/sandalias/consultar");
    setProducto(consulta.data);
    console.log(consulta.data);
  };

  useEffect(() => {
    Consultar();
  }, []);
  return (
    <>
    <div class="container">
      {producto.map((sandalias, index) => {
        return (
              <div class="col lg-4 m-1">
                <center>
                <div class="card">
                    <div class="">
                    <img src={sandalias.idImagen} class="img-fluid rounded-4" height="120px"/>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">{sandalias.nombre}</h5>
                    <p class="card-text">
                      {producto.descripcion}
                    </p>
                    <a href="#" class="btn btn-primary">
                      {sandalias.precio}
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

export default Sandalias;