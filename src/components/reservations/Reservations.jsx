import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Reservation from './reservation/Reservation';
import { getReservation } from '../../store/reservation/reservation';

const Reservations = () => {
  const reservations = useSelector(((state) => state.reservations.reservations));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReservation());
  }, [dispatch]);
  console.log(reservations);
  return (
    <div className="container">
      {
        reservations.map((item) => (
          <Reservation key={item.id} reservation={item} />
        ))
      }
    </div>
  );
};
export default Reservations;
