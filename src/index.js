import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import FilterProvider from './contexts/FilterContext';
import SelectedJobProvider from './contexts/SelectedJobContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilterProvider>
      <SelectedJobProvider>
        <App />
      </SelectedJobProvider>
    </FilterProvider>
  </React.StrictMode>
);
