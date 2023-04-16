import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = document.getElementById('root');
const render = root => {
  createRoot(root).render(<App />);
};

if (root) {
  render(root);
} else {
  window.addEventListener('DOMContentLoaded', () => {
    render(document.getElementById('root'));
  });
}
