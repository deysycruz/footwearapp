import React, { useEffect, useState } from "react";
import Axios from '../services/ConexionAxios';



function Tenis() {
  const [producto, setProducto] = useState([]);

  const Consultar = async () => {
    const consulta = await Axios.get("/tenis/consultar");
    setProducto(consulta.data);
    console.log(consulta.data);
  };

  useEffect(() => {
    Consultar();
  }, []);
  return (
    <>
    <div class="container">
      {producto.map((tenis, index) => {
        return (
              <div class="col lg-4 m-1">
                <center>
                <div class="card">
                    <div class="">
                    <img src={tenis.idImagen} class="img-fluid rounded-4" height="120px"/>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">{tenis.nombre}</h5>
                    <p class="card-text">
                      {producto.descripcion}
                    </p>
                    <a href="#" class="btn btn-primary">
                      {tenis.precio}
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

export default Tenis;