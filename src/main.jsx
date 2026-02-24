import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RegistrationProvider } from './context/RegistrationContext.jsx'
import { SwitchAccountProvider } from './context/SwitchAccountContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RegistrationProvider>
      <SwitchAccountProvider>
        <App />
      </SwitchAccountProvider>
    </RegistrationProvider>
  </StrictMode>,
)
