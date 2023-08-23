import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllTrains from '../components/AllTrains';
import SingleTrain from '../components/SingleTrain';
import { TrainProvider } from '../context/TrainContext';

const Routes = () => {
  return (
    <TrainProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={AllTrains} />
          <Route path="/train/:trainId" component={SingleTrain} />
        </Switch>
      </Router>
    </TrainProvider>
  );
};

export default Routes;
