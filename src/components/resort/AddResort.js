import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AddResort from './AddResort.module.css';
import Notification from './resort_components/Notification';
import { setRole } from '../../store/user/user';
import { setNewResort } from '../../store/resort-details/newResort';
import Form from './resort_components/Form';

function resortAdd() {
  const message = useSelector((state) => state.newResort.message);
  const [showNotice, setShowNotice] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setRole());
  }, []);

  const addResort = (e) => {
    setShowNotice(true);
    e.preventDefault();
    const resort = {
      name: e.target.name.value,
      country: e.target.country.value,
      city: e.target.city.value,
      description: e.target.description.value,
      cost: e.target.cost.value,
      image: e.target.image.value,
    };
    dispatch(setNewResort(resort));
    setTimeout(() => {
      setShowNotice(false);
    }, 3000);

    setTimeout(() => {
      if (message !== 'Could not add resort') {
        navigate('/resorts');
      }
    }, 5000);
  };

  return (
    <div className={AddResort.add_resort_container} data-testid="Add-resort">
      <Notification showNotice={showNotice} message={message} />
      <h1>Add Resort</h1>
      <Form addResort={addResort} formId="add" />
    </div>
  );
}

export default resortAdd;
