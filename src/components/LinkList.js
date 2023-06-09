import React from 'react';
import Link from './Link';
import { useQuery, gql } from '@apollo/client';

const FEED_QUERY = gql`
query{
  estrellas{
    id,
    nombre,
    radio,
    distancia,
    rotacion,
    edad,
    ubicacion,
    masa,
    temperatura,
    constelacion,
    color
  }
}
`
;

const LinkList = () => {
  const { data } = useQuery(FEED_QUERY);

  return (
    <div>
      {data && (
        <>
          {data.estrellas.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </>
      )}
    </div>
  );
};

export default LinkList;