import React from 'react'

const Personaje = ({ personaje }) => {

    const { name, species, image, gender, location, origin, status } = personaje;

  return (
    <div className="col-md-4 mb-2">
        <div className="card">
            <img 
                src={image} 
                alt={`imagen-${name}`} 
                className="card-img-top"
            />
            <div className="card-body">
                <h5>{name}</h5>
                <p>Specie: {species}</p>
                <p>Gender: {gender}</p>
                <p>Origin: {origin.name}</p>
                <p>Location: {location.name}</p>
                <p>Status: {status}</p>
            </div>
        </div>
    </div>
  );
};

export default Personaje;