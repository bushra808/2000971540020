import React from 'react';

const TrainCard = ({ train }) => {
  return (
    <div className="train-card">
      <h3>{train.name}</h3>
      <p>Departure Time: {train.departureTime}</p>
      <p>Seat Availability: {train.seatAvailability}</p>
      <p>Price: {train.price}</p>
    </div>
  );
};

export default TrainCard;
