import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import classes from './Resorts.module.css';

const Resort = (props) => {
  const { resort } = props;
  const detailsUrl = `/resorts/${resort.id}`;

  return (
    <Link to={detailsUrl}>
      <Image roundedCircle src={resort.image} alt={resort.name} />
      <h2 className={classes.resort_name}>{resort.name}</h2>
    </Link>
  );
};

Resort.propTypes = {
  resort: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Resort;
