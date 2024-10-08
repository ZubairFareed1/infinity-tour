import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "primereact/resources/themes/nova/theme.css"
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";  
import 'primeflex/primeflex.css'; // Import PrimeFlex
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>

    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
