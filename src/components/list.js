import React from "react"

const List = ({ handleDelete, list }) => (
  <ul>
    {list.map((item, index) => (
      <li key={index + item}>
        <span>{item}</span>
        <button
          type="button"
          className="delete"
          onClick={() => handleDelete(item)}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
)

export default List
