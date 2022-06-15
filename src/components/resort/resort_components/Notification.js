/* eslint-disable prefer-const */
import React from 'react';
import AddResort from '../AddResort.module.css';

function Notification(props) {
  // eslint-disable-next-line react/prop-types
  let { showNotice, message } = props;

  return (
    <>
      <div
        className={AddResort.notice_container}
        style={{
          display: message && showNotice === true ? 'block' : 'none',
        }}
      >
        {message && (
          <p
            className={AddResort.notification}
            style={{
              backgroundColor:
                message === 'Could not update resort' ? 'red' : ' ',
            }}
          >
            {message}
          </p>
        )}
      </div>
    </>
  );
}

export default Notification;
