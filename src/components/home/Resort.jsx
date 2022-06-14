import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate, Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

const Resort = (props) => {
  const { resort } = props;
  const navigate = useNavigate();

  return (
    <Link to="/resorts/${resort.id}">
      <Image roundedCircle src={resort.image} alt={resort.name} />
      <h3>{resort.name}</h3>
      <p>{resort.description}</p>
      <button type="button" onClick={() => navigate('/resorts')}>Show details</button>
    </Link>
  );
};

Resort.propTypes = {
  resort: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Resort;
