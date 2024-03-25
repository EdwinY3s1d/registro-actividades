<<<<<<< HEAD
import React, { useState } from 'react';
import '../index.css'


function Register() {
    const [actividad, setActividad] = useState('');
    const [horaInicio, setHoraInicio] = useState('');
    const [horaFin, setHoraFin] = useState('');
    const [numeroIdentificacion, setNumeroIdentificacion] = useState('');
=======
import React, { useState } from "react";
import './register.css';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        activity: '',
        dateTime: ''
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }
>>>>>>> a7b57fa4b67c6829bb5b0f7617026b67fc8e96ce

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos al servidor o realizar otras acciones
        console.log('Número de identificación:', numeroIdentificacion);
        console.log('Actividad:', actividad);
        console.log('Hora de inicio:', horaInicio);
        console.log('Hora de fin:', horaFin);
    };

    return (
<<<<<<< HEAD
        <div className="container">
            <h1>Registro de Actividades</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="numeroIdentificacion">Número de identificación</label>
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
=======
        <div class="cover-container-register d-flex p-3 mx-auto flex-column">
            <form onSubmit={handleSubmit} class="form-register">
                <h1>Registrar actividad</h1>
                
                <div class="col-md-12 mb-4">
                    <div class="row">
                        <div class="col-md-12 mb-6">
                            <label class="form-label col-12">
                                Actividad:
                                <input type="text" name="activity" onChange={handleChange} className="form-control"/>
                            </label>
                        </div>

                        <div class="col-md-12 mb-3">
                            <label class="form-label col-12">
                                Día y Hora:
                                <input type="datetime-local" name="dateTime" onChange={handleChange} className="form-control" />
                            </label>
                        </div>
                        <button type="submit" className="button-register">Enviar</button>
                    </div>
                </div> 
>>>>>>> a7b57fa4b67c6829bb5b0f7617026b67fc8e96ce
            </form>
        </div>
    );
}

export default Register;