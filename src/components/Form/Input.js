import React from 'react';
import './Input.css';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className="wrapper">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="input"
        type={type}
        onBlur={onBlur}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Input;
