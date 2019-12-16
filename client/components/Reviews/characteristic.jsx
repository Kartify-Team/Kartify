import React from 'react';

const Characteristic = ({ type, value }) => {
  let labels = [];
  if (type === 'Comfort') labels = ['Poor', '', 'Perfect'];
  if (type === 'Size') labels = ['Too small', 'Perfect', 'Too Large'];
  if (type === 'Length') labels = ['Too short', 'Perfect', 'Too long'];
  if (type === 'Width') labels = ['Too narrow', 'Perfect', 'Too wide'];
  if (type === 'Fit') labels = ['Poor', '', 'Perfect'];
  if (type === 'Quality') labels = ['Poor', '', 'Great'];
  // fas fa-caret-down
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
            style={{ 'font-size': '1.9em' }}
          ></i>
        </div>
        <div className="characteristics-sub-bar">
          <h3 className="characteristic-label">{labels[0]}</h3>
        </div>
        <div className="characteristics-sub-bar">
          <h3 className="characteristic-label">{labels[1]}</h3>
        </div>
        <div className="characteristics-sub-bar">
          <h3 className="characteristic-label">{labels[2]}</h3>
        </div>
      </div>
    </div>
  );
};

export default Characteristic;
