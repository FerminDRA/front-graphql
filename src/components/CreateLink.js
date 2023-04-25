import React, { useState } from 'react';

import { useMutation, gql } from '@apollo/client';

const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $nombre: String!
    $distancia: String!
    $radio: Float!
    $rotacion: Float!
    $edad: Int!
    $ubicacion: Int!
    $masa: Int!
    $temperatura: Float!
    $constelacion: String!
    $color: String
    )
    {
        createLink(nombre: $nombre,distancia: $distancia,radio: $radio,rotacion: $rotacion,edad: $edad,ubicacion: $ubicacion,masa: $masa,temperatura: $temperatura,constelacion: $constelacion,color: $color) {
        id
        createdAt
        nombre
        distancia
        radio
        rotacion
        edad
        ubicacion
        masa
        temperatura
        constelacion
        color
        }
    }
`;

const CreateLink = () => {
  const [formState, setFormState] = useState({
    color: '',
    constelacion: '',
    distancia: '',
    edad: 0,
    masa: 0,
    nombre: '',
    radio: 0,
    rotacion: 0,
    temperatura: 0,
    ubicacion: 0
  });

  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    variables: {
        color: '',
        constelacion: '',
        distancia: '',
        edad: 0,
        masa: 0,
        nombre: '',
        radio: 0,
        rotacion: 0,
        temperatura: 0,
        ubicacion: 0
    }
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createLink();
        }}
      >
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={formState.description}
            onChange={(e) =>
              setFormState({
                ...formState,
                description: e.target.value
              })
            }
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={formState.url}
            onChange={(e) =>
              setFormState({
                ...formState,
                url: e.target.value
              })
            }
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateLink;