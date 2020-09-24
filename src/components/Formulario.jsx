import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/dist/v4';

const Formulario = ({ agregarCita }) => {
    const citaInicial = {
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    };
    const [cita, setCita] = useState({ ...citaInicial });
    const [error, setError] = useState(false);
    const submitCita = e => {
        e.preventDefault();
        if (mascota.trim() === '' ||
            propietario.trim() === '' ||
            fecha.trim() === '' ||
            hora.trim() === '' ||
            sintomas.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        cita.id = uuid();
        agregarCita(cita);
        setCita({ ...citaInicial });
    }
    const handleChange = e => setCita({
        ...cita,
        [e.target.name]: e.target.value
    });
    const { mascota, propietario, fecha, hora, sintomas } = cita;
    return (
        <Fragment>
            <h2>Crear Cita</h2>
            {error
                ?
                <p className="alerta-error">Todos los campos son obligatorios</p>
                :
                null
            }
            <form
                onSubmit={submitCita}>
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={mascota}
                />
                <label>Nombre del Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del Dueño de la mascota"
                    onChange={handleChange}
                    value={propietario}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />
                <label>Síntomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                    value={sintomas}
                />
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    );
}


Formulario.propTypes = {
    agregarCita: PropTypes.func.isRequired
}

export default Formulario;