import React from "react";

import "./style.css";

const Button = ({ children, loading }) => {
  return <button disabled={loading} className="button">
    { children }
  </button>;
};

export default Button;
