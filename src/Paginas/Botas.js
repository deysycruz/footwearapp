import React, { useEffect, useState } from "react";
import Axios from '../services/ConexionAxios';



function Botas() {
  const [producto, setProducto] = useState([]);

  const Consultar = async () => {
    const consulta = await Axios.get("/botas/consultar");
    setProducto(consulta.data);
    console.log(consulta.data);
  };

  useEffect(() => {
    Consultar();
  }, []);
  return (
    <>
      <div class="container">
        {producto.map((botas, index) => {
          return (
            <div class="col lg-4 m-1">
              <center>
                <div class="card">
                  <div class="">
                    <img src={botas.idImagen} class="img-fluid rounded-4" height="120px" />
                    <h5 class="card-title">{botas.nombre}</h5>
                    <a href="https://www.coppel.com/botas-casuales-kroogen-de-piel-para-hombre-pr-8329452">
                      <button className='btn btn-danger'>Link de compras</button>
                    </a>
                    <p class="card-text">
                      {producto.descripcion}
                    </p>
                    <a href="#" class="btn btn-primary">
                      {botas.precio}
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

export default Botas;