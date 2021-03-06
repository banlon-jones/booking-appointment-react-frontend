/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddResort from '../AddResort.module.css';
import {
  selectResort,
  getResort,
} from '../../../store/resort-details/resortDetail';

// Button description: variable
let buttonDescription = '';

const Form = (props) => {
  const { formId } = props;
  const { addResort } = props;
  const { updateResortValue } = props;
  const { updateId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if (formId !== 'add') {
      dispatch(getResort(updateId));
    }
  }, []);

  const resortDetails = useSelector(selectResort);

  const setRestoreValue = (el) => {
    let result = '';
    if (formId !== 'add') {
      result = resortDetails[el];
    }
    return result;
  };

  if (formId === 'add') {
    buttonDescription = 'Add Resort';
  } else buttonDescription = 'Update Resort';

  return (
    <>
      <form
        className={AddResort.form}
        onSubmit={(e) => {
          if (formId === 'add') {
            addResort(e);
          } else updateResortValue(e);
        }}
        data-testid="form"
      >
        <input
          type="text"
          placeholder="Name"
          name="name"
          defaultValue={setRestoreValue('name')}
          required
        />
        <input
          type="text"
          placeholder="Country"
          name="country"
          defaultValue={setRestoreValue('country')}
          required
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          defaultValue={setRestoreValue('city')}
          required
        />
        <textarea
          placeholder="Resort description"
          col="50"
          row="50"
          name="description"
          defaultValue={setRestoreValue('description')}
          required
        />

        <input
          type="text"
          placeholder="Cost"
          name="cost"
          defaultValue={setRestoreValue('cost')}
          required
        />
        <div className={AddResort.file}>
          <span className={AddResort.label}>Enter Resort Image URl:</span>
          <input
            className={AddResort.image_input}
            type="url"
            name="image"
            defaultValue={setRestoreValue('image')}
            required
          />
        </div>
        <button type="submit" className={AddResort.button_resort_add}>
          {buttonDescription}
        </button>
      </form>
    </>
  );
};

export default Form;
