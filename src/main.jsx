import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Parse from 'parse'


Parse.initialize(import.meta.env.VITE_APP_KEY, import.meta.env.VITE_JS_KEY);
Parse.serverURL = import.meta.env.VITE_SERVER_URL;


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
