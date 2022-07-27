import React from 'react';
import'material-icons';
import'materialize-css';

import {Link} from 'react-router-dom'
function Categoria() {
  return (
    <div>
        <ul class="collection">
    <li class="collection-item avatar" href="Botas">
    <img src='https://drive.google.com/uc?export=download&id=1gEGPhUr-rZg8DS8a8HEsVCg_l6TbXOh9' alt="small" class="circle"/>
      <Link to="/Botas" class="tittle">Botas</Link>
      <p><br/>
        
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <div/>
    
        <ul class="collection">
    <li class="collection-item avatar" href="Tenis">
    <img src='https://drive.google.com/uc?export=download&id=135UWT_fYcX79zRFiVbzOu5a3sXfNBsN-' alt="small" class="circle"/>
      <Link to="/Tenis" class="tittle">Tenis</Link>
      <p><br/>
        
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <div/>

        <ul class="collection">
    <li class="collection-item avatar" href="Sandalia">
      <img src='https://drive.google.com/uc?export=download&id=16Uu9dLLD05v3qxzchf7V1oNnL-8CJiRx' alt="small" class="circle"/>
      <Link to="/Sandalias" class="tittle">Sandalias</Link>
      <p><br/>
        
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <div/>

        <ul class="collection">
    <li class="collection-item avatar" href="Tacones">
    <img src='https://drive.google.com/uc?export=download&id=1zlmD49x7ZijMpDHa0XuwaL3YdyHycx5w' alt="small" class="circle"/>
      <Link to="/Tacones" class="tittle">Tacones</Link>
      <p><br/>
        
      </p>
      <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
    </li>
    <div/>
   
    </ul>
  </ul>
  </ul>
  </ul>
  </div>
  

  );
}

export default Categoria