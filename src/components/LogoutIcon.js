import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default (props) => (
  <div>
    <button className='button--big' onClick={props.startLogout}>
      <FontAwesomeIcon icon={faSignOutAlt} size='2x' />
    </button>
  </div>
);
