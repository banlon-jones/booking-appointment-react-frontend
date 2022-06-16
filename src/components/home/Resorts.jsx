import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { GrNext, GrPrevious } from 'react-icons/gr';
import classes from './Resorts.module.css';

import { resortsFetched } from '../../store/resorts/resortsSlice';
import CircleSpinner from '../spinners/CircleSpinner';
import Resort from './Resort';

const Resorts = () => {
  const resorts = useSelector((state) => state.resorts);
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageSize, setPageSize] = useState(3);

  const baseIndex = () => currentPage * pageSize;

  const prevClickHandler = () => {
    if (currentPage > 0) setCurrentPage((currentPage) => currentPage - 1);
    else setCurrentPage(0);
  };

  const nextClickHandler = () => {
    if (currentPage < Math.ceil(resorts.length / pageSize) - 1) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };

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

  useEffect(() => {
    fetchResorts();
    if (resorts) {
      setLoading(false);
    }
    setPageSize(3);
  }, []);

  useEffect(() => {
    setCurrentItems(resorts.slice(baseIndex(), baseIndex() + pageSize));
  }, [resorts]);

  useEffect(() => {
    setCurrentItems(resorts.slice(baseIndex(), baseIndex() + pageSize));
  }, [currentPage]);

  return (
    <div className={classes.resorts_container}>
      <div className={classes.resorts_header}>
        <h1>Most Visited Resorts</h1>
        <p>Please select a resort to visit.</p>
      </div>
      <div className={classes.current_resorts_container}>
        <button
          type="button"
          onClick={() => prevClickHandler()}
          className={(currentPage > 0) ? classes.prev : classes.prev_disabled}
          disabled={(currentPage <= 0)}
        >
          <GrPrevious />
        </button>
        <ul className={classes.current_resorts_list}>
          {currentItems.map((resort) => (
            <li key={resort.id}>
              <Resort resort={resort} />
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => nextClickHandler()}
          className={
            (currentPage < Math.ceil(resorts.length / pageSize) - 1)
              ? classes.next
              : classes.next_disabled
            }
          disabled={currentPage >= Math.ceil(resorts.length / pageSize) - 1}
        >
          <GrNext />
        </button>
      </div>
      {errorMessage && <h2>{errorMessage}</h2>}
      {loading && <CircleSpinner />}
    </div>
  );
};

export default Resorts;
