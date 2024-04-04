import React from 'react';
import classes from "./TagList.module.css";

const TagListInput = ({ value, onChange }) => {
  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      onChange(value);
    }
  };

  return (
    <div className={classes.inputContainer}>
      <label className={classes.inputLabel} htmlFor="perPage">Items per page (max 99):</label>
      <input 
        className={classes.inputField}
        type="number" 
        id="perPage" 
        name="perPage" 
        value={value} 
        onChange={handleInputChange} 
        min="1"
      />
    </div>
  );
};

export default TagListInput;