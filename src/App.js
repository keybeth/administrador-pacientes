import React, { Fragment, useEffect, useState } from 'react';
import Cita from './components/Citas';
import Formulario from './components/Formulario';

function App() {
  const citasIniciales =  JSON.parse(localStorage.getItem('citas') || '[]');
  const [citas, setCitas] = useState(citasIniciales);
  const agregarCita = cita => setCitas([...citas, cita]);
  const eliminarCita = cita => setCitas(citas.filter(c => c.id !== cita.id));
  useEffect(() => {
    localStorage.setItem('citas', JSON.stringify(citas || []));
  }, [citas]);
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              agregarCita={agregarCita} />
            </div>
          <div className="one-half column">
            <h2>
            {citas.length === 0
            ? 'No hay citas'
            : 'Administra tus citas'
            }
            </h2>
            {citas.map(cita => (
              <Cita 
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
