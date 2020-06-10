import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default (props) => (
  <div>
    <button className='footer-button' onClick={props.startLogout}>
      <FontAwesomeIcon icon={faSignOutAlt} className='grey-button' size='2x' />
    </button>
  </div>
);
