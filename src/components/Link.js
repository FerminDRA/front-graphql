import React from 'react';

const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <div>
        <h3>Estrella</h3>
      </div>
      <div>
        Nombre: {link.nombre}
      </div>
      <div>
        Distancia: {link.distancia}
      </div>
      <div>
        Radio: {link.radio}
      </div>
      <div>
        Rotacion: {link.rotacion}
      </div>
      <div>
        Edad: {link.edad}
      </div>
      <div>
        Ubicacion: {link.ubicacion}
      </div>
      <div>
        Masa: {link.masa}
      </div>
      <div>
        Temperatura: {link.temperatura}
      </div>
      <div>
        Constelacion: {link.constelacion}
      </div>
      <div>
        Color: {link.color}
      </div>
    </div>
  );
};

export default Link;