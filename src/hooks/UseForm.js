import { useState } from "react";

const UseForm = ({ initialState }) => {
  const [values, setValues] = useState(initialState);

  const onChange = (target) =>
    setValues({
      ...values,
      [target.name]: target.value,
    });
  return [values, onChange];
};

export default UseForm;
