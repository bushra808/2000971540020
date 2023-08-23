import React, { useState, useEffect } from 'react';
import axios from '../services/api';
import TrainCard from './TrainCard';

const AllTrains = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await axios.get('/trains');
        setTrains(response.data);
      } catch (error) {
        console.error('Error fetching trains:', error);
      }
    };

    fetchTrains();
  }, []);


  return (
    <div>
      <h2>All Trains Schedule</h2>
      <div className="train-list">
        {trains.map(train => (
          <TrainCard key={train.id} train={train} />
        ))}
      </div>
    </div>
  );
};

export default AllTrains;
