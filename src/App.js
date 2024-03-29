
import './App.css';
import React from 'react';
import AppRouter from './routes/index';
import './pages/css/style.css';
import { I18nextProvider } from 'react-i18next';

function App() {
  return (
    <div>
      <I18nextProvider>
        <AppRouter />
      </I18nextProvider>
    </div>
  );
}

export default App;
