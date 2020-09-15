import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default (props) => (
  <div>
    <button className='button--big' onClick={props.showSearch}>
      <FontAwesomeIcon icon={faSearch} size='2x' />
    </button>
  </div>
);
