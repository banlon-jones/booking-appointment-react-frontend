import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Reservation from './reservation/Reservation';
import { getReservation } from '../../store/reservation/reservation';
import { setRole } from '../../store/user/user';

const Reservations = () => {
  const navigate = useNavigate();
  if (!sessionStorage.getItem('JwtAccessToken')) {
    navigate('/login');
  }
  const reservations = useSelector(((state) => state.reservations.reservations));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReservation());
    dispatch(setRole());
  }, [dispatch]);
  return (
    <div className="container mt-5 pt-5">
      {
        reservations.map((item) => (
          <Reservation key={item.id} reservation={item} />
        ))
      }
    </div>
  );
};
export default Reservations;
