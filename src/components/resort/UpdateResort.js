import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import Notification from './resort_components/Notification';
import AddResort from './AddResort.module.css';
import { setRole } from '../../store/user/user';
import { setUpdateResort } from '../../store/resort-details/updateResort';
import Form from './resort_components/Form';

function UpdateResort() {
  const dispatch = useDispatch();
  const { updateId } = useParams();
  const navigate = useNavigate();

  const message = useSelector((state) => state.updateResort.message);
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    dispatch(setRole());
  }, []);

  const updateResortValue = (e) => {
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
    dispatch(setUpdateResort(resort, updateId));
    setTimeout(() => {
      setShowNotice(false);
    }, 3000);

    setTimeout(() => {
      if (message !== 'Could not update resort') {
        navigate(`/resorts/${updateId}`);
      }
    }, 5000);
  };

  return (
    <div className={AddResort.add_resort_container} data-testid="Update-resort">
      <Notification showNotice={showNotice} message={message} />
      <h1>Update Resort</h1>
      <Form updateResortValue={updateResortValue} formId="update" />
    </div>
  );
}

export default UpdateResort;
