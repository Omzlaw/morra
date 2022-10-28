import ReactDOM from 'react-dom/client';
import React from 'react';

export const renderDOM = (app) => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      {app}
    </React.StrictMode>
  );
}
