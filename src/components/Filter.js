import React from "react";

const Filter = (props) => {
  return (
    <div className="filter">
      <div className="filter-result">{props.count} Products</div>
      <div className="filter-sort">
        Order
        <select>
          <option>Latest</option>
          <option value="lowest">Lowest</option>
          <option value="lowest">Lowest</option>
        </select>
      </div>
      <div className="filter-size">
        Filter By Size
        <select>
          <option value="">ALL</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
