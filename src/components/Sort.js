import { Dropdown, DropdownButton } from "react-bootstrap";

function Sort({ onSortChange }) {
  return (
    <DropdownButton id="dropdown-item-button" variant="light" title="Relevance">
      <Dropdown.Item onClick={() => onSortChange("relevance")}>
        Relevance
      </Dropdown.Item>
      <Dropdown.Item onClick={() => onSortChange("lowToHigh")}>
        Low to High
      </Dropdown.Item>
      <Dropdown.Item onClick={() => onSortChange("highToLow")}>
        High to Low
      </Dropdown.Item>
    </DropdownButton>
  );
}

export default Sort;
