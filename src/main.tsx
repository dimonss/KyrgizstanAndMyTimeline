import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LanguageProvider } from './i18n/LanguageContext'
import { translations } from './i18n/translations'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider translations={translations}>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
