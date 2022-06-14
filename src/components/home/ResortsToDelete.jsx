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

  useEffect(() => {
    if (resorts.length === 0) fetchResorts();
  }, [resorts]);

  return (
    <div>
      <ul className={classes.resorts_container}>
        {resorts.map((resort) => (
          <li key={resort.id}>
            {resort.name}
            <button type="button" onClick={() => deleteResort(resort.id)}>delete</button>
          </li>
        ))}
      </ul>
      {errorMessage && <h2>{errorMessage}</h2>}
      {loading && <CircleSpinner />}
    </div>
  );
};

export default ResortsToDelete;
