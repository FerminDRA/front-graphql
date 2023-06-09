import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';
import { AUTH_TOKEN } from '../constants';

const CREATE_LINK_MUTATION = gql`
  mutation PostMutation(
    $nombre: String!,
    $distancia: String!,
    $radio: Float!,
    $rotacion: Float!,
    $edad: Int!,
    $ubicacion: Int!,
    $masa: Int!,
    $temperatura: Float!,
    $constelacion: String!,
    $color: String!
    ){
      createEstrella(nombre: $nombre,distancia: $distancia,radio: $radio,rotacion: $rotacion,edad: $edad,ubicacion: $ubicacion,masa: $masa,temperatura: $temperatura,constelacion: $constelacion,color: $color) {
        id
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
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    nombre:'',
    distancia:'',
    radio:0,
    rotacion:0,
    edad:0,
    ubicacion:0,
    masa:0,
    temperatura:0,
    constelacion:'',
    color:''
  });

  const authToken = localStorage.getItem(AUTH_TOKEN);

  const [createLink] = useMutation(CREATE_LINK_MUTATION, {
    context: {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    },
    variables: {
      nombre: formState.nombre,
      distancia: formState.distancia,
      radio: formState.radio,
      rotacion: formState.rotacion,
      edad: formState.edad,
      ubicacion: formState.ubicacion,
      masa: formState.masa,
      temperatura: formState.temperatura,
      constelacion: formState.constelacion,
      color: formState.color
    },
    onCompleted: () => navigate('/')
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
            value={formState.nombre}
            onChange={(e) =>
              setFormState({
                ...formState,
                nombre: e.target.value
              })
            }
            type="text"
            placeholder="A nombre for the star"
          />
          <input
            className="mb2"
            value={formState.distancia}
            onChange={(e) =>
              setFormState({
                ...formState,
                distancia: e.target.value
              })
            }
            type="text"
            placeholder="The distancia for the star"
          />
          <input
            className="mb2"
            value={formState.radio}
            onChange={(e) =>
              setFormState({
                ...formState,
                radio: e.target.value
              })
            }
            type="number"
            placeholder="The radio for the star"
          />
          <input
            className="mb2"
            value={formState.rotacion}
            onChange={(e) =>
              setFormState({
                ...formState,
                rotacion: e.target.value
              })
            }
            type="number"
            placeholder="The rotacion for the star"
          />
          <input
            className="mb2"
            value={formState.edad}
            onChange={(e) =>
              setFormState({
                ...formState,
                edad: e.target.value
              })
            }
            type="number"
            placeholder="The edad for the star"
          />
          <input
            className="mb2"
            value={formState.ubicacion}
            onChange={(e) =>
              setFormState({
                ...formState,
                ubicacion: e.target.value
              })
            }
            type="number"
            placeholder="The ubicacion for the star"
          />
          <input
            className="mb2"
            value={formState.masa}
            onChange={(e) =>
              setFormState({
                ...formState,
                masa: e.target.value
              })
            }
            type="number"
            placeholder="The masa for the star"
          />
          <input
            className="mb2"
            value={formState.temperatura}
            onChange={(e) =>
              setFormState({
                ...formState,
                temperatura: e.target.value
              })
            }
            type="number"
            placeholder="The temperatura for the star"
          />
          <input
            className="mb2"
            value={formState.constelacion}
            onChange={(e) =>
              setFormState({
                ...formState,
                constelacion: e.target.value
              })
            }
            type="text"
            placeholder="The constelacion for the star"
          />
          <input
            className="mb2"
            value={formState.color}
            onChange={(e) =>
              setFormState({
                ...formState,
                color: e.target.value
              })
            }
            type="text"
            placeholder="The color for the star"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateLink;