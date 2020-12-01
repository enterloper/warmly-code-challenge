import React, { useState } from "react";
import { array, func, string } from "prop-types";
import findCharacterMatch from "../../helpers/findCharacterMatch";
import "./dropdown-styles.css";

const DropDownInput = ({ label, placeholder, onHandleChange, options }) => {
  const [inputValue, setInputValue] = useState("");
  const [optionsList, setOptionsList] = useState(options);
  const [dropdownVisibility, setDropDownVisibility] = useState(false);
  const [listFocus, setListFocus] = useState("");
  // TODO need useEffect for validation on blur (must be an item from the list);
  const handleInputChange = ({ target }) => {
    const { value } = target;
    setInputValue(value);
    const filteredOptions = findCharacterMatch(value, options);
    setOptionsList(filteredOptions);
    onHandleChange(inputValue); // TODO probs don't need here, useEffect would be better
  };

  const handleClear = () => {
    setInputValue("");
    onHandleChange(""); // TODO probs don't need here, useEffect would be better
  };

  const handleFocusChange = () => {
    setDropDownVisibility(true);
  };

  const handleOptionClick = ({ target }) => {
    setInputValue(target.innerHTML);
    setDropDownVisibility(false);
  };

  const handleKeyDown = (e) => {
    const { key, target } = e;
    // useRef may be (probably is) best solution here.
    console.log(key);
    if (!listFocus) {
      const listTarget = target.nextSibling.firstChild;
      console.log(listTarget);
      setListFocus(listTarget);
      listTarget.focus();
    }
    // const keys = ["ArrowDown", "ArrowUp", "Enter"];
    console.log(key === "ArrowDown");
  };

  return (
    <div className="drop-down-container">
      <div className="drop-down-clear">
        {!!inputValue.length && <button type="button" onClick={handleClear}>
            X
          </button>
        } 
      </div>
      <label className="drop-down-label" htmlFor={label}>
        {label}
      </label>
      <input
        name={label}
        id={label}
        placeholder={placeholder}
        className="drop-down-input"
        type="input"
        value={inputValue}
        // onBlur={handleFocusChange} better logic needed
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
        onFocus={handleFocusChange}
      />
      {dropdownVisibility && (
        <ul className="drop-down-list">
          {optionsList.map((option) => (
            <li key={option} onClick={handleOptionClick}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

DropDownInput.propTypes = {
  placeholder: string,
  label: string.isRequired,
  onHandleChange: func,
  options: array
};

DropDownInput.defaultProps = {
  placeholder: "",
  onHandleChange: () => {},
  options: []
};

// need validation
export default DropDownInput;
