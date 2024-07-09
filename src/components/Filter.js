// Filter.js
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { FunnelFill } from "react-bootstrap-icons";

function Filter({ categories, brands, onCategoryChange, onBrandChange }) {
  return (
    <DropdownButton
      id="dropdown-item-button"
      variant="light"
      title={
        <span>
          <FunnelFill className="me-2" />
          Filter
        </span>
      }
    >
      <Dropdown.Header
        onClick={() => onCategoryChange("all")}
        className="fw-bold"
      >
        All Categories
      </Dropdown.Header>
      {categories.map((category) => (
        <Dropdown.Item
          key={category}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </Dropdown.Item>
      ))}

      <Dropdown.Header className="fw-bold mt-3">Brands</Dropdown.Header>
      {brands.map((brand) => (
        <Dropdown.Item key={brand} onClick={() => onBrandChange(brand)}>
          {brand}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

export default Filter;
