import React from 'react';
import { createRoot } from 'react-dom';
import App from './App.jsx';

const domRoot = document.querySelector('#root');
const root = createRoot(domRoot);
root.render(<App />);
