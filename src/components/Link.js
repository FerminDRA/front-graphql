import React from 'react';

const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <div>
        {link.nombre} ({link.rotacion})
      </div>
    </div>
  );
};

export default Link;