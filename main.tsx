import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export function Demo() {
  return (
    <Card>
      <h2>Exemple</h2>
      <Button onClick={() => alert('clic')}>Cliquez</Button>
    </Card>
  );
}
