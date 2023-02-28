import React from "react";
import { Link } from "react-router-dom";

const Type = ({ type, filterItems, activeCategory }) => {
  return (
    <div className="btn-container">
      {type.map((category, index) => {
        return (
          <button
            type="button"
            className={`${activeCategory === category ? "filter-btn active" : "filter-btn"
              }`}
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
      <button className="filter-btn" onClick={() => window.location.reload(false)}>All</button>
    </div>
  );
};

export default Type;
