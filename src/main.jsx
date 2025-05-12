import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './pages/HomePage.jsx';
import './assets/styles/main.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage/>
  </StrictMode>,
);
