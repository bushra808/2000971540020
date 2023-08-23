import React from 'react';
import { TrainProvider } from './context/TrainContext';
import Routes from './routes/Routes';

function App() {
  return (
    <TrainProvider>
      <div className="app">
        <Routes />
      </div>
    </TrainProvider>
  );
}

export default App;
