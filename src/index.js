/* Librearias de react */
import React from 'react';
import ReactDOM from 'react-dom/client';
/* Componente padre */
import App from './App';
/* Estilos */
import './css/index.css'


/* Obtenemos el contenedor principal en donde vamos a renderizar nuestra 
    aplicacion de react
*/

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


