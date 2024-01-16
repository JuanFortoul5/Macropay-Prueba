import React, { useState } from "react";



export const Checkbox = ({ id, name, onChange = () => {} }) => {

  const [selection, setSelection] = useState(false);


  const handleCheckbox = e => {

    setSelection(e.target.checked);

    if (onChange) {
      onChange(id, e.target.checked);
    }
  };


  return (
    <input className='input-checkbox' checked={selection} id={id} name={name} onChange={handleCheckbox} type="checkbox"/>
  );
};