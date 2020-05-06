import React from 'react';

const Form = ({ handleChange, handleSubmit, value }) => (
  <form onSubmit={(event) => handleSubmit(event, value)}>
    <input
      name="item"
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Enter an item"
    />
  <button type="submit" className="submit">Submit</button>
  </form>
)

export default Form;
