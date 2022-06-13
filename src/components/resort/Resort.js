/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsChevronRight } from 'react-icons/bs';
import { useNavigate, useParams } from 'react-router-dom';
import {
  selectResort,
  getResort,
} from '../../store/resort-details/resortDetail';
import resortClass from './Resort.module.css';

function Resort() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getResort(id));
  }, []);

  const user = useSelector((state) => state.user);
  const resortDetails = useSelector(selectResort);
  return (
    <div className={resortClass.resort_container}>
      <div className={resortClass.inner_container}>
        <div className={resortClass.image_container}>
          <img src={resortDetails.image} alt="logo" />
        </div>

        <div className={resortClass.resort_details_container}>
          <h1>{resortDetails.name}</h1>
          <ul>
            <li>
              Country:
              <span>{resortDetails.country}</span>
            </li>
            <li>
              City:
              <span>{resortDetails.city}</span>
            </li>
            <li>
              Description:
              <p>{resortDetails.description}</p>
            </li>
            <li>
              Cost:
              <span>{`$${resortDetails.cost}`}</span>
            </li>
          </ul>
          <div className={resortClass.button_main_container}>
            <button
              type="button"
              className={resortClass.button_container}
              onClick={() => {
                navigate(`/resorts/${resortDetails.id}`);
              }}
            >
              Reserve
              <BsChevronRight className={resortClass.icon} />
            </button>
            <button
              type="button"
              className={resortClass.button_container}
              style={{ display: user.role === 'admin' ? 'block' : 'none' }}
              onClick={() => {
                navigate(`/resort-update/${resortDetails.id}`);
              }}
            >
              Update
              <BsChevronRight className={resortClass.icon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resort;
