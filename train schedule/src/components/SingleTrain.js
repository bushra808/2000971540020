import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../services/api';

const SingleTrain = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchTrain = async () => {
      try {
        const response = await axios.get(`/trains/${trainId}`);
        setTrain(response.data);
      } catch (error) {
        console.error('Error fetching train details:', error);
      }
    };

    fetchTrain();
  }, [trainId]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Train Details</h2>
      <div>
        <h3>{train.name}</h3>
        <p>Departure Time: {train.departureTime}</p>
        <p>Seat Availability: {train.seatAvailability}</p>
        <p>Price: {train.price}</p>
      </div>
    </div>
  );
};

export default SingleTrain;
