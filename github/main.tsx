import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from '../app/page';
import '../app/globals.css';
import '../app/fresh-refinement.css';

const normalizedPath = window.location.pathname.replace(/\/+$/, '');
const variant = normalizedPath.endsWith('/short') || normalizedPath.endsWith('/nov') ? 'short' : 'full';
const theme = normalizedPath.endsWith('/presentation-fresh')
  ? 'fresh'
  : normalizedPath.endsWith('/presentation-dark')
  ? 'cosmic'
  : normalizedPath.endsWith('/presentation')
    ? 'sky'
    : 'fresh';
document.body.classList.toggle('theme-sky-active', theme === 'sky' || theme === 'cosmic' || theme === 'fresh');
document.body.classList.toggle('theme-cosmic-active', theme === 'cosmic');
document.body.classList.toggle('theme-fresh-active', theme === 'fresh');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home variant={variant} theme={theme} assetBase={import.meta.env.BASE_URL} />
  </StrictMode>,
);
