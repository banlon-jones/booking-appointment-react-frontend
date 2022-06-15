import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import classes from './Resorts.module.css';

import { resortsFetched } from '../../store/resorts/resortsSlice';
import CircleSpinner from '../spinners/CircleSpinner';

const ResortsToDelete = () => {
  const resorts = useSelector((state) => state.resorts);
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchResorts = async () => {
    try {
      setLoading(true);
      const { data } = await axios({
        url: 'https://resorts-booking-api.herokuapp.com/resorts',
        method: 'GET',
        headers: {
          authorization: sessionStorage.getItem('JwtAccessToken'),
        },
      });
      if (data.error) {
        setErrorMessage(data.error);
        return;
      }
      dispatch(resortsFetched(data));
    } catch (err) {
      setLoading(false);
    }
  };

  const deleteResort = async (id) => {
    console.log('resort id is: ', id);
    await axios({
      url: `https://resorts-booking-api.herokuapp.com/resorts/${id}`,
      method: 'DELETE',
      headers: {
        authorization: sessionStorage.getItem('JwtAccessToken'),
      },
    });
    fetchResorts();
  };

  useEffect(() => {
    if (resorts.length === 0) fetchResorts();
  }, [resorts]);

  return (
    <div>
      <ul className={classes.resorts_to_delete_container}>
        <h2 className="text-center w-100">All Resorts</h2>
        {resorts.map((resort) => (
          <li key={resort.id} className={classes.resort_to_delete}>
            {resort.name}
            <button
              type="button"
              onClick={() => deleteResort(resort.id)}
              className={classes.btn_delete_resort}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
      {errorMessage && <h2>{errorMessage}</h2>}
      {loading && <CircleSpinner />}
    </div>
  );
};

export default ResortsToDelete;
