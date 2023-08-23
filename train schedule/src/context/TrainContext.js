import React, { createContext, useState, useContext } from 'react';

const TrainContext = createContext();

export const useTrainContext = () => {
  return useContext(TrainContext);
};

export const TrainProvider = ({ children }) => {
  const [trains, setTrains] = useState([]);


  const contextValue = {
    trains,
    setTrains
  };

  return (
    <TrainContext.Provider value={contextValue}>
      {children}
    </TrainContext.Provider>
  );
};
