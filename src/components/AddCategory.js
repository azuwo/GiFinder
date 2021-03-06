import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handlgeInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //if (inputValue.trim().length > 2) {
    if (inputValue.length > 0) {
      //   setCategories((categories) => [inputValue, ...categories]); // incremental
      setCategories((categories) => [inputValue]); // replace
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handlgeInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export { AddCategory };
