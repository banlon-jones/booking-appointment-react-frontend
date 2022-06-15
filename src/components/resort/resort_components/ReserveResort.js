/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import resortClass from '../ResortDetails.module.css';
// eslint-disable-next-line no-unused-vars
import { createReservation } from '../../../store/reservation/reservation';

function ReserveResort() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { resortId } = useParams();
  const onSubmit = (data) => {
    const payload = { ...data, resort_id: resortId };
    dispatch(createReservation(payload));
    navigate('/reservations');
  };

  return (
    <>
      <button
        type="button"
        className={resortClass.button_container}
        onClick={handleShow}
        data-testid="reserve-button"
      >
        Reserve
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
                  <input
                    type="date"
                    id="from"
                    className="form-control"
                    {...register('date_from')}
                  />
                </div>
                <div className="col-12">
                  <p> To </p>
                  {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                  <input
                    type="date"
                    className="form-control"
                    {...register('date_to')}
                  />
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
    </>
  );
}

export default ReserveResort;
