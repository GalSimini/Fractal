import React from 'react';
import { createRoot } from 'react-dom/client'; // Importação atualizada
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Nova API do React 18
const container = document.getElementById('root');
const root = createRoot(container); // Cria a raiz

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);