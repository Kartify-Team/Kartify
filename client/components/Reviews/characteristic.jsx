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
    <div className="characteristic-container">
      <div className="characteristic-static">
        <div className="characteristic-dynamic" style={style}></div>
      </div>
    </div>
  );
};

export default Characteristic;
