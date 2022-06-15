import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line no-unused-vars
import { createReservation } from '../../store/reservation/reservation';

const ResortDetails = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { id } = useParams();
  const onSubmit = (data) => {
    dispatch(createReservation({ ...data, resort_id: id }));
    navigate('/reservations');
  };
  return (
    <div className="container">
      ResortDetails
      <span>{id}</span>
      <button type="button" className="btn btn-primary" onClick={handleShow}>
        Launch
      </button>
      <div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Make a Reservation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-12">
                  <p> From </p>
                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  <input type="date" id="from" className="form-control" {...register('date_from', { required: true })} />
                  {errors.date_from && <span>This date is required</span>}
                </div>
                <div className="col-12">
                  <p> To </p>
                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  <input type="date" className="form-control" {...register('date_to', { required: true })} />
                  {errors.date_to && <span>This date is required</span>}
                </div>
              </div>
              <div className="m-3">
                <button type="submit" className="btn btn-success">
                  {' '}
                  submit
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default ResortDetails;
