import React from 'react';
import { useDispatch } from 'react-redux';
import AddResort from './AddResort.module.css';
import setNewResort from '../../store/resort-details/newResort';
import Form from './resort_components/Form';

function resortAdd() {
  const dispatch = useDispatch();
  const addResort = (e) => {
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
  };

  return (
    <div className={AddResort.add_resort_container}>
      <h1>Add Resort</h1>
      <Form addResort={addResort} formId="add" />
    </div>
  );
}

export default resortAdd;
