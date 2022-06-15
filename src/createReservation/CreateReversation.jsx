import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { resortsFetched } from '../store/resorts/resortsSlice';
import { createReservation } from '../store/reservation/reservation';

const CreateReservation = () => {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm();
  const resorts = useSelector((state) => state.resorts);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(createReservation(data));
  };
  const fetchResorts = async () => {
    try {
      const { data } = await axios({
        url: 'https://resorts-booking-api.herokuapp.com/resorts',
        method: 'GET',
        headers: {
          authorization: sessionStorage.getItem('JwtAccessToken'),
        },
      });
      if (data.error) {
        return;
      }
      dispatch(resortsFetched(data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchResorts();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="mt-5">
          <div className="card-body text-center mt-5">
            <h1 className="card-title"> BOOK A RESORT </h1>
            <div className="card-body">
              <p>
                Best Price Guarantee! No reservation costs. Great rates. Get Instant Confirmation.
                24/7 Customer Service. We speak your language.
                Read Real Guest Reviews. Types: Hotels, Apartments, Villas, Hostels, Resorts, B&Bs.
              </p>
            </div>
          </div>
          <div className="card text-center shadow">
            <div className="card-body">
              <h2> Make a reservation </h2>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-4">
                      <p> Select resort </p>
                      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                      <select {...register('resort_id')} className="form-control-lg form-control">
                        <option disabled> Select a resort </option>
                        {
                          resorts.map((item) => (
                            <option key={item.id} value={item.id} name={item.name}>
                              {item.name}
                              {' '}
                            </option>
                          ))
                        }
                      </select>
                      {errors.resort_id && <span>resort is required</span>}
                    </div>
                    <div className="col-md-4">
                      <p> From </p>
                      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                      <input type="date" id="from" className="form-control" {...register('date_from', { required: true })} />
                      {errors.date_from && <span>This date is required</span>}
                    </div>
                    <div className="col-md-4">
                      <p> To </p>
                      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                      <input type="date" className="form-control" {...register('date_to', { required: true })} />
                      {errors.date_to && <span>This date is required</span>}
                    </div>
                  </div>
                  <div className="m-3">
                    <button type="submit" className="btn btn-success">
                      {' '}
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateReservation;
