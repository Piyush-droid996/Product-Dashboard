import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import WelcomeMessage from './components/WelcomeMessage';

import PerformanceMetrics from './components/PerformanceMetrics';
import ShipmentRechart from './components/ShipmentRechart';
import CustomizationOptions from './components/CustomizationOptions';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <WelcomeMessage />
      <PerformanceMetrics/>
      <ShipmentRechart/>
      <CustomizationOptions/>

      
    </Router>
  );
}

export default App;
