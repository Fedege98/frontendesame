import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [codice, setCodice] = useState('');

  const handleSubmit = async (event) => {
    console.log("handleSubmit invoked");
    event.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:3001/sendToIoTHub', {
        codice: codice,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="app">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="codice" className="form-label">Imposta temperatura</label>
          <input
            id="codice"
            className="form-input"
            type="text"
            value={codice}
            onChange={e => setCodice(e.target.value)}
          />
          <button type="submit" className="form-button">Invia</button>
        </form>
      </div>
    </div>
  );
}

export default App;
