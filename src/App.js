
import './App.css';
import React from 'react';
import AppRouter from './routes/index';
import './pages/css/style.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; 

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <AppRouter /> {/* Your main application component */}
    </I18nextProvider>
  );
}

export default App;
