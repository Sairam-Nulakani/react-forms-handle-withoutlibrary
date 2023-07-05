import React, { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const [touched, setTouched] = useState(false);
  const handleTouched = (e) => {
    setTouched(true);
  };
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        type="text"
        {...inputProps}
        onChange={onChange}
        onBlur={handleTouched}
        onFocus={() => {
          inputProps.name === "confirmPassword" && setTouched(true);
        }}
        touched={touched.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
