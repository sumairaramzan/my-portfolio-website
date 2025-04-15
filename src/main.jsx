import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router
import './index.css';
import App from './App.jsx';
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from './AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router> 
    <AuthProvider>
        <App />
    </AuthProvider>
    </Router>
  </StrictMode>
);
