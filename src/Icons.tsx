import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Icons.css';

const Icons = () => {
  const [selectedField, setSelectedField] = useState(null);
  const [userData, setUserData] = useState({});

  const fieldsData = {
    nombre: 'Nombre',
    correo: 'Correo',
    cumpleanos: 'Cumpleaños',
    direccion: 'Dirección',
    telefono: 'Teléfono',
    contrasena: 'Contraseña',
  };

  useEffect(() => {
    if (selectedField) {
      // Realiza una solicitud a la API solo si se ha seleccionado un campo
      axios.get('https://randomuser.me/api/').then((response) => {
        const user = response.data.results[0];
        setUserData(user);
      });
    }
  }, [selectedField]);

  const getFieldData = (field: string) => {
    if (!userData) {
      return 'Cargando...';
    }
  
    if (field === "nombre" && userData.name) {
    return `${userData.name.first} ${userData.name.last}`;
  } else if (field === "correo" && userData.email) {
    return userData.email;
  } else if (field === "cumpleanos" && userData.dob) {
    return userData.dob.date;
  } else if (field === "direccion" && userData.location) {
    return `${userData.location.street}, ${userData.location.city}`;
  } else if (field === "telefono" && userData.phone) {
    return userData.phone;
  } else if (field === "contrasena" && userData.login) {
    return userData.login.password;
  }
  return "Dato no encontrado";
  };

  const handleIconClick = (field) => {
    setSelectedField(field);
  };

  return (
    <div>
      <div className="icons-container">
        {Object.keys(fieldsData).map((field) => (
          <div
            key={field}
            className={`icon ${selectedField === field && 'selected'}`}
            onClick={() => handleIconClick(field)}
          >
            {fieldsData[field]}
          </div>
        ))}
      </div>
      <div className="selected-field">
        {selectedField ? (
          <>
            <label>{fieldsData[selectedField]}</label>
            <div className="field-value">
              {userData ? getFieldData(selectedField) : 'Cargando...'}
            </div>
          </>
        ) : (
          <p>Haz clic en un icono para ver los detalles</p>
        )}
      </div>
    </div>
  );
};

export default Icons;
