import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './Router/App';
import React from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
