import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 createRoot API
import App from './App'; // Main App component
import AuthProvider from './context/AuthProvider';

// Create the root for rendering the app
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
);
