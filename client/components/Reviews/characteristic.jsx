import React from 'react';
import { labels } from './labels';

const Characteristic = ({ type, value }) => {
  const style = {
    width: `${(value / 5) * 100}%`
  };

  return (
    <div className="characteristic">
      <h3 className="characteristic-type">{type}</h3>
      <div className="characteristics-container">
        <div className="pointer" style={style}>
          <i
            className="fa fa-caret-down fa-lg"
            style={{ fontSize: '1.2em' }}
          ></i>
        </div>
        <div className="characteristics-sub-bar">
          <h3 className="characteristic-label">
            {labels[type.toLowerCase()][0]}
          </h3>
        </div>
        <div className="characteristics-sub-bar">
          <h3 className="characteristic-label">
            {labels[type.toLowerCase()][3]}
          </h3>
        </div>
        <div className="characteristics-sub-bar">
          <h3 className="characteristic-label">
            {labels[type.toLowerCase()][4]}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Characteristic;
