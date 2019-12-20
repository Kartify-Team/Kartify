import React, { useState, useEffect } from 'react';
import { labels } from '../labels';

const CharacteristicForm = ({ name, handler }) => {
  const meanings = labels[name];
  const [value, setValue] = useState(3);

  useEffect(() => {
    handler(value);
  }, [value]);

  return (
    <>
      <label htmlFor={name}>{name}</label>
      <h3>{meanings[value - 1]}</h3>
      <span className="meaning"></span>
      <input
        type="range"
        min="1"
        max="5"
        value={value}
        name={name}
        onChange={e => setValue(e.target.value)}
      />
    </>
  );
};

export default CharacteristicForm;
