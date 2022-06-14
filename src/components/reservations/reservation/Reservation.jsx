import React from 'react';
import './reservation.css';

const Reservation = (Prop) => {
  const { reservation } = Prop;
  const formatDate = (date) => new Date(date).toDateString();
  return (
    <div>
      <div className="card m-4">
        <div className="card-body">
          <div className="row">
            <div className="col-2">
              <img src={reservation.resort.image} alt="resort" className="img-fluid rounded" />
            </div>
            <div className="col-10">
              <h2>
                { reservation.resort.name }
              </h2>
              <p>
                Country:
                <span>
                  {' '}
                  { reservation.resort.country }
                  {' '}
                </span>
                <span>
                  {' '}
                  City :
                  <span>
                    {' '}
                    { reservation.resort.city }
                    {' '}
                  </span>
                </span>
              </p>
              <p>
                From :
                <span>
                  {' '}
                  { formatDate(reservation.date_from) }
                  {' '}
                </span>
              </p>
              <p>
                To :
                <span>
                  {' '}
                  { formatDate(reservation.date_to) }
                  {' '}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
