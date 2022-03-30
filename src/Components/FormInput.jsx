import React from "react";

function FormInput({ type, name, value, ...res }) {
  return (
    <>
      <input type={type} name={name} value={value} {...res} />
    </>
  );
}

export default FormInput;
