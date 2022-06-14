import React from 'react';
import { useParams } from 'react-router-dom';
import classes from './Resorts.module.css';

const ResortDetails = () => {
  const { id } = useParams();
  return (
    <div className={classes.resort_details}>
      ResortDetails
      <span>{id}</span>
    </div>
  );
};

export default ResortDetails;
