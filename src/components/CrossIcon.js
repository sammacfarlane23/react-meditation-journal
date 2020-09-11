import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default (props) => (
  <div>
    <button className='footer-button' onClick={props.showSearch}>
      <FontAwesomeIcon icon={faTimes} className='white-button' size='2x' />
    </button>
  </div>
);
