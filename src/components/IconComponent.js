import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default (props) => (
  <div>
    <FontAwesomeIcon
      icon={props.icon}
      size={props.size}
      className={props.class}
    />
  </div>
);
