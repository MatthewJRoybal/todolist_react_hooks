import React from 'react';

const Items = ({ handleDelete, items }) => {
  // console.log(items);
  return (
    <ul>
    {items.map((item, index) => (
        <li key={index + item}>
          <span>{item}</span>
          <button type="button" className="delete" onClick={() => handleDelete(item)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default Items;
