import React from 'react';

import Inicio from '../Inicio/Inicio';
import Footer from '../Inicio/Footer';

function Layout({children}) {
  return (
    <div>
      <Inicio/>
      {children}
    </div>
  )
}

export default Layout