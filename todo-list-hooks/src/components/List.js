import React from "react";

export default function List({ title, items, onClickItem }) {
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {items.map(item => (
          <li key={item.title} onClick={() => onClickItem(item)}>
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
}

