import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddResort from './AddResort.module.css';
import setUpdateResort from '../../store/resort-details/updateResort';
import Form from './resort_components/Form';

function UpdateResort() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const updateResortValue = (e) => {
    e.preventDefault();
    const resort = {
      name: e.target.name.value,
      country: e.target.country.value,
      city: e.target.city.value,
      description: e.target.description.value,
      cost: e.target.cost.value,
      image: e.target.image.value,
    };
    dispatch(setUpdateResort(resort, id));
  };

  return (
    <div className={AddResort.add_resort_container}>
      <h1>Update Resort</h1>
      <Form updateResortValue={updateResortValue} formId="update" />
    </div>
  );
}

export default UpdateResort;
