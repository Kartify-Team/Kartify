import React, { useState, useEffect } from 'react';
import { labels } from '../labels';

const CharacteristicForm = ({ name, handler }) => {
  const meanings = labels[name];
  const [value, setValue] = useState(1);

  useEffect(() => {
    handler(value);
  }, [value]);

  return (
    <>
      <label htmlFor={name}>{name}</label>
      <h3>{meanings[value - 1]}</h3>
      <span className="meaning"></span>
      <input
        type="radio"
        name={name}
        value="1"
        checked={value === 1}
        onChange={() => setValue(1)}
      />
      1
      <br />
      <input
        type="radio"
        name={name}
        value="2"
        checked={value === 2}
        onChange={() => setValue(2)}
      />
      2
      <br />
      <input
        type="radio"
        name={name}
        value="3"
        checked={value === 3}
        onChange={() => setValue(3)}
      />
      3
      <br />
      <input
        type="radio"
        name={name}
        value="4"
        checked={value === 4}
        onChange={() => setValue(4)}
      />
      4
      <br />
      <input
        type="radio"
        name={name}
        value="5"
        checked={value === 5}
        onChange={() => setValue(5)}
      />
      5
      <br />
    </>
  );
};

export default CharacteristicForm;