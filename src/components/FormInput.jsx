import React from "react";
import "./formInput.css";

const FormInput = (props) => {
  return (
    <div className="formInput">
      {/* <label>Username</label> */}
      <input type="text" placeholder={props.placeholder} name={props.name} />
    </div>
  );
};

export default FormInput;
