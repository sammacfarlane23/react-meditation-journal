import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconComponent = (props) => (
  <div>
    <FontAwesomeIcon
      icon={props.icon}
      size={props.size}
      className={props.class}
    />
  </div>
);

export default IconComponent;
