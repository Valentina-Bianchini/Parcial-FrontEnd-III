import Card from "./components/Card";
import './App.css'
import React, { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensajeError, setMensajeError] = useState(null);
  const [enviado, setEnviado] = useState(false);

  const isValidName = nombre.length > 3;
  const isValidMail = email.length > 6;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValidName && !isValidMail) {
      setMensajeError('Por favor chequea que la información sea correcta');
      return;
    }
    if (!isValidName && nombre.trim() === '') {
      setMensajeError('El nombre debe tener al menos 3 caracteres');
      return;
    }
    if (!isValidMail) {
      setMensajeError('El email debe tener al menos 6 caracteres y contener un "@"');
      return;
    }    
    setEnviado(true);
  };
  return (
    <div>
      {enviado ? (
        <div>
          <Card nombre={nombre} email={email}/>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="formulario">
          <label>
            Nombre:
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <button type="submit">ENVIAR</button>
          {mensajeError && <p>{mensajeError}</p>}
        </form>
      )}
    </div>
  )
}

export default App
