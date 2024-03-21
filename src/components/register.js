import React, { useState } from 'react';
import '../../src/index.css'; 

function RegistroActividadesForm() {
    const [actividad, setActividad] = useState('');
    const [horaInicio, setHoraInicio] = useState('');
    const [horaFin, setHoraFin] = useState('');
    const [numeroIdentificacion, setNumeroIdentificacion] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes enviar los datos al servidor o realizar otras acciones
      console.log('Número de identificación:', numeroIdentificacion);
      console.log('Actividad:', actividad);
      console.log('Hora de inicio:', horaInicio);
      console.log('Hora de fin:', horaFin);
    };
  
    return (
      <div className="container">
        <h1>Registro de Actividades</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="numeroIdentificacion">Número de identificación:</label>
            <input
              type="text"
              id="numeroIdentificacion"
              className="form-control"
              value={numeroIdentificacion}
              onChange={(e) => setNumeroIdentificacion(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="actividad">Actividad:</label>
            <input
              type="text"
              id="actividad"
              className="form-control"
              value={actividad}
              onChange={(e) => setActividad(e.target.value)}
            />
          </div>
          <div className="form-row">
            <div className="form-group col">
              <label htmlFor="horaInicio">Hora de inicio:</label>
              <input
                type="time"
                id="horaInicio"
                className="form-control"
                value={horaInicio}
                onChange={(e) => setHoraInicio(e.target.value)}
              />
            </div>
            <div className="form-group col">
              <label htmlFor="horaFin">Hora de fin:</label>
              <input
                type="time"
                id="horaFin"
                className="form-control"
                value={horaFin}
                onChange={(e) => setHoraFin(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Registrar
          </button>
        </form>
      </div>
    );
  }
  
  export default RegistroActividadesForm;

